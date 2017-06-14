#!/bin/sh
# install Composer
curl -s https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer

/etc/init.d/apache2 restart
