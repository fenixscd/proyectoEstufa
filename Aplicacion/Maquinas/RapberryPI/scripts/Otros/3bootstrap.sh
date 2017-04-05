#!/usr/bin/env bash
apt-get install vim
#apt-get install python-software-properties
add-apt-repository ppa:bjori/php5
apt-get update
apt-get install php5
apt-get install -y apache2


if [ -d /var/www/html/ ]; then
	sudo rm -rf /var/www/html
else
	echo "La carpeta html no existe"
fi


VHOST=$(cat <<EOF
<VirtualHost *:80>
    DocumentRoot "/var/www"
    <Directory "/var/www">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
EOF
)

echo "${VHOST}" > /etc/apache2/sites-available/000-default.conf

#/etc/init.d/apache2/ stop
#/etc/init.d/apache2/ start
/etc/init.d/apache2/ restart
