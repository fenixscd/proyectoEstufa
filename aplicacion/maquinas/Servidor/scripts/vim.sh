#!/bin/sh
# vimrc install script

DIRECTORIO=/home/vagrant
sudo su vagrant
who -m

#Instala git si no esta instalado 
if ! git --version >/dev/null 2>&1; then
    sudo apt-get install git -y
fi

# Instala curl si no esta instalado
if ! curl --version >/dev/null 2>&1; then
    sudo apt-get install curl -y
    #echo "You need to install Curl to download vim-plug."
    #exit 1
fi


# Si existe el algunos de los archivos de configuracion
# Lo elimina el <archivo>.bak y renombra los archivos de
# Configuracion a .bak
[ -e $DIRECTORIO/.vimrc ] && (rm -rf $DIRECTORIO/.vimrc.bak; mv $DIRECTORIO/.vimrc $DIRECTORIO/.vimrc.bak)
[ -e $DIRECTORIO/.gvimrc ] && (rm -rf $DIRECTORIO/.gvimrc.bak; mv $DIRECTORIO/.gvimrc $DIRECTORIO/.gvimrc.bak)
[ -e $DIRECTORIO/.vim ] && (rm -rf $DIRECTORIO/.vim.bak; mv $DIRECTORIO/.vim $DIRECTORIO/.vim.bak)

echo Clonando mi reposeitorio gitub con la configuracion
git clone https://github.com/fenixscd/vimrc $DIRECTORIO/.vim
echo 'Downloading vim-plug...'

echo Descargando y instalando el gestor de paqutes 
curl -sfLo $DIRECTORIO/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

echo Crea un enlace simbolico
ln -s $DIRECTORIO/.vim/vimrc $DIRECTORIO/.vimrc
ln -s $DIRECTORIO/.vim/gvimrc $DIRECTORIO/.gvimrc

# Si esta instalado vim ejecuta el el comando para que se carguen los plugins.
if vim --version >/dev/null 2>&1; then
    echo "Vim si esta instalado"
    vim +PlugInstall +qall
else
    echo "Vim no esta instalado"
    echo "Instala vim y despues ejecuta el siguente comando:"
    echo "  vim +PlugInstall +qall"
#    read parar
fi
sudo su
#read parar
