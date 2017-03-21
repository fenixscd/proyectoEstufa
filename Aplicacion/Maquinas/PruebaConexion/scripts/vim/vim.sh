#!/bin/sh
# vimrc install script

if [ -f /vagrant/scripts/vim/vimrc ];then
    echo "Sí, sí existe el archivo vimrc"
    ln -s /vagrant/scripts/vim/vimrc /home/vagrant/.vimrc
    echo "Enlace simbolico creado"
else
    echo "No, no existe el archivo vimrc"
fi