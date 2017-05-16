#!/usr/bin/env bash

#DBHOST=localhost
DBNAME=ServidorEstufa
DBUSER=ServidorEstufa
DBPASSWD=ServidorEstufa


echo '.'
echo '-------------------------------------------------------------------------'
echo '----------------------------- ACTUALIZADO SISTEMA -----------------------'
echo '-------------------------------------------------------------------------'
echo '.'
apt-get update
apt-get -y upgrade
echo '.'
echo '-------------------------------------------------------------------------'
echo '-------------------- SISTEMA ACTUALIZADO --------------------------------'
echo '-------------------------------------------------------------------------'
echo '.'
echo '-------------------------------------------------------------------------'
echo '--------------Instalado curl y git---------------------------------------'
echo '-------------------------------------------------------------------------'
apt-get install -y curl git nmap

echo '.'
echo '-------------------------------------------------------------------------'
echo '--------------curl INSTALADO --------------------------------------------'
echo '-------------------------------------------------------------------------'
echo '.'
echo '-------------------------------------------------------------------------'
echo '--------------Instalado HTOP---------------------------------------------'
echo '-------------------------------------------------------------------------'
apt-get install -y htop
echo '. '
echo '-------------------------------------------------------------------------'
echo '----------------------- HTOP INSTALADO ----------------------------------'
echo '-------------------------------------------------------------------------'
echo '.'
echo '-------------------------------------------------------------------------'
echo '----------------------- Instalado apache2 -------------------------------'
echo '-------------------------------------------------------------------------'
apt-get install -y apache2
echo '.'
echo '-------------------------------------------------------------------------'
echo '----------------------- Apache2 Instalado -------------------------------'
echo '-------------------------------------------------------------------------'

#Configuracion de apache
#	Borrar carpeta del servidor
echo '.'
echo '-------------------------------------------------------------------------'
echo '---------------------- Configuracion APACHE -----------------------------'
echo '-------------------------------------------------------------------------'
if [ -d /var/www/html/ ]; then
	sudo rm -rf /var/www/html
else
	echo "La carpeta html no existe"
fi
#Carpeta internet
if [ -d /var/www/web/ ]; then
	echo "--- LA CARPETA WEB YA EXISTE"
else
	echo "--- CREANDO LA CARPETA WEB"
	mkdir /var/www/web
fi

if [ -d /var/www/web/public/ ]; then
	echo "--- LA CARPETA PUBLIC YA EXISTE"
else
	echo "--- CREANDO LA CARPETA PUBLIC"
	mkdir /var/www/web/public
fi

#Archivo de configuarición para el virtual host
VHOST=$(cat <<EOF
<VirtualHost *:80>
        ServerAdmin     fenixscd@gmail.com
        ServerName      127.0.0.1
        ServerAlias     www.proyectoestufa.es
        DocumentRoot "/var/www/web/public"
        <Directory "/var/www/web/public">
                Options Indexes FollowSymLinks
                AllowOverride All
                Order allow,deny
                allow from all
        </Directory>
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
EOF
)

echo "${VHOST}" > /etc/apache2/sites-available/000-default.conf

#Avilita el moculo rewite para que funcione la configuración .htacces
sudo a2enmod rewrite

#Reinica el servicio para que haga efecto la configuracion
sudo service apache2 restart




echo '.'
echo '--------------------------------------------------------'
echo '-------------- APACHE Configurado-----------------------'
echo '--------------------------------------------------------'
echo '.'
echo '-------------------------------------------------------------------------------------------------'
echo '--------------Instalado php5-cli php5-curl php5-mcrypt php5-gd php5-sqlite php5-cgi php5-mysql---'
echo '-------------------------------------------------------------------------------------------------'
echo '.'
#apt-get install php5 php5-cli php5-curl php5-mcrypt php5-gd php5-sqlite php5-cgi php5-mysql -y
#sudo mv -i /etc/php5/conf.d/mcrypt.ini /etc/php5/mods-available/
#php5enmod mcrypt #Cifrado

apt-get install php5 -y
apt-get install php5-cli -y
apt-get install php5-curl -y
apt-get install php5-mcrypt -y
apt-get install php5-gd -y
apt-get install php5-sqlite -y
apt-get install php5-cgi -y
apt-get install php5-mysql -y

echo '.'
echo '-------------------------------------------------------------------------------------------------'
echo '-------------- php5-cli php5-curl php5-mcrypt php5-gd php5-sqlite php5-cgi php5-mysql INSTALADO--'
echo '-------------------------------------------------------------------------------------------------'
echo '.'

echo '.'
echo '-------------------------------------------------------------------------------------------------'
echo '-------------- instalando y configurando MYSQL---------------------------------------------------'
echo '-------------------------------------------------------------------------------------------------'
echo '.'
debconf-set-selections <<< "mysql-server mysql-server/root_password password $DBPASSWD"
debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $DBPASSWD"
apt-get install mysql-server -y

#Configurado la base de dateo para que se pueda acceder desde el exterior
sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mysql/my.cnf
sudo service mysql restart

mysql -uroot -p$DBPASSWD -e "GRANT ALL PRIVILEGES ON *.* TO root@'%' IDENTIFIED BY '$DBPASSWD'"> /vagrant/vm_build.log 2>&1
mysql -uroot -p$DBPASSWD -e "FLUSH PRIVILEGES";
#apt-get install mysql-client -y


echo -e "\n--- CONFIGURANDO BASE DE DATOS ---\n"

mysql -uroot -p$DBPASSWD -e "CREATE DATABASE $DBNAME" >> /vagrant/vm_build.log 2>&1
#mysql -uroot -p$DBPASSWD -e "grant all privileges on $DBNAME.* to '$DBUSER'@'localhost' identified by '$DBPASSWD'" > /vagrant/vm_build.log 2>&1
echo '.'
echo '-------------------------------------------------------------------------------------------------'
echo '--------------  MYSQL INSTALDO Y FUNCIONANDO-----------------------------------------------------'
echo '-------------------------------------------------------------------------------------------------'
echo '.'


# install Composer
curl -s https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer

/etc/init.d/apache2 restart

# if [ -f /vagrant/scripts/vim.sh ];then
# 	echo "Sí, sí existe."
# 	chmod +x /vagrant/scripts/vim.sh
# 	sh /vagrant/scripts/vim/vim.sh
# else
# 	echo "No, no existe"
# fi

echo '........'



#!/usr/bin/env bash

#DBHOST=localhost

# echo "Hola"

# if [ -d /var/www/infrastructura/ ]; then
#         echo "Me coloco en la carpeta"
        
# else
#         echo "LA CARPETA infrastructura NO EXISTE"
# fi

# if [ -d /var/www/infrastructura/ ]; then
#         echo "Me coloco en la carpeta"
#         cd /var/www/infrastructura
#         if [ -f /var/www/infrastructura/WebSocket.php ];then
#                 clear
#                 echo "El ejecuto el WebSocket"
#                 php /var/www/infrastructura/WebSocket.php
#         else
#                 echo "El archivo WebSocket.php no existe"
#         fi
# else
#         echo "LA CARPETA infrastructura NO EXISTE"
# fi

# if [ -f /vagrant/scripts/vim.sh ];then
#       echo "Sí, sí existe."
#       chmod +x /vagrant/scripts/vim.sh
#       sh /vagrant/scripts/vim/vim.sh
# else
#       echo "No, no existe"
# fi

