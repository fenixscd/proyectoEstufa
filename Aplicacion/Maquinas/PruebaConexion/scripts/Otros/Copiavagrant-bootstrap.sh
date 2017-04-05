#!/usr/bin/env bash

apt-get update
echo '----------------------------------------------------------'
echo '-------------- SISTEMA ACTUALIZADO -----------------------'
echo '----------------------------------------------------------'
#apt-get -y upgrade

apt-get install -y curl vim screen puppet git
echo '-------------------------------------------------------------------------'
echo '--------------Instalado git curl vim screen puppet-----------------------'
echo '-------------------------------------------------------------------------'

# navegadores web en modo texto
apt-get install -y lynx links links2
echo '-----------------------------------------------------------'
echo '--------------Instalado git lynx links links2--------------'
echo '-----------------------------------------------------------'

apt-get install -y ccze bmon multitail nano iotop
echo '------------------------------------------------------------------------'
echo '--------------Instalado git ccze bmon multitail nano iotop--------------'
echo '------------------------------------------------------------------------'

#apt-get install -y apache2
#echo '--------------------------------------------------------'
#echo '-------------- Instalado apache2 -----------------------'
#echo '--------------------------------------------------------'
#rm -rf /var/www # Borra todo lo que hay dentro de la carpeta
# ln -fs /vagrant /var/www

#apt-get install -y php5-cli php5-curl php5-mcrypt php5-gd php5-sqlite php5-cgi
#echo '-------------------------------------------------------------------------------------------------'
#echo '--------------Instalado php5-cli php5-curl php5-mcrypt php5-gd php5-sqlite php5-cgi--------------'
#echo '-------------------------------------------------------------------------------------------------'

#sudo mv -i /etc/php5/conf.d/mcrypt.ini /etc/php5/mods-available/
#php5enmod mcrypt

#MYSQL_PASSWORD="root"
#PHPMYADMIN_PASSWORD="root"

#echo "mysql-server-5.5 mysql-server/root_password password $MYSQL_PASSWORD" | debconf-set-selections
#echo "mysql-server-5.5 mysql-server/root_password_again password $MYSQL_PASSWORD" | debconf-set-selections

#apt-get -y install mysql-client mysql-server

#echo 'phpmyadmin phpmyadmin/dbconfig-install boolean false' | debconf-set-selections
#echo 'phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2' | debconf-set-selections

#echo 'phpmyadmin phpmyadmin/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
#echo 'phpmyadmin phpmyadmin/mysql/admin-pass password $MYSQL_PASSWORD' | debconf-set-selections
#echo 'phpmyadmin phpmyadmin/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
#echo 'phpmyadmin phpmyadmin/setup-password password $PHPMYADMIN_PASSWORD' | debconf-set-selections
#echo 'phpmyadmin phpmyadmin/database-type select mysql' | debconf-set-selections
#echo 'phpmyadmin phpmyadmin/mysql/app-pass password $PHPMYADMIN_PASSWORD' | debconf-set-selections

#echo 'dbconfig-common dbconfig-common/mysql/app-pass password $PHPMYADMIN_PASSWORD' | debconf-set-selections
#echo 'dbconfig-common dbconfig-common/mysql/app-pass password' | debconf-set-selections
#echo 'dbconfig-common dbconfig-common/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
#echo 'dbconfig-common dbconfig-common/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
#echo 'dbconfig-common dbconfig-common/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
#echo 'dbconfig-common dbconfig-common/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections

#apt-get -y install phpmyadmin

# Instalar composer
#curl -sS https://getcomposer.org/installer | php

#Composr de forma global
#sudo mv ~/composer.phar /usr/local/bin/composer