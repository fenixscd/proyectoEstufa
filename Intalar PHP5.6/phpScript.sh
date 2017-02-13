sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get install libapache2-mod-php5.6
sudo a2dismod php5
sudo a2enmod php5.6
sudo add-apt-repository ppa:ondrej/php5-compat
sudo apt-get update
sudo apt-get dist-upgrade
