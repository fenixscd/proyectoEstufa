#!/bin/sh
#Ejecutar commits automaticos
function horaActual()
{
	DIA=`date +"%d/%m/%Y"`
	HORA=`date +"%H:%M"`

	echo "Hoy es el $DIA y la hora actual es $HORA!"
}

function barraDeProgreso(){

	local fraccion=`expr $1 / 10`

	echo -ne '\e[95m[......................] (0%)\r'
	sleep  $fraccion
	echo -ne '[##....................] (10%)\r'
	sleep  $fraccion
	echo -ne '[####..................] (20%)\r'
	sleep  $fraccion
	echo -ne '[######................] (30%)\r'
	sleep  $fraccion
	echo -ne '[########..............] (40%)\r'
	sleep  $fraccion
	echo -ne '[##########............] (50%)\r'
	sleep  $fraccion
	echo -ne '[############..........] (60%)\r'
	sleep  $fraccion
	echo -ne '[##############........] (70%)\r'
	sleep  $fraccion
	echo -ne '[################......] (80%)\r'
	sleep  $fraccion
	echo -ne '[####################..] (90%)\r'
	sleep  $fraccion
	echo -ne '[######################] (100%)\e[0m\r'
}



function crearCommit()
{
	clear
	echo -e "\e[92m--Git status--\e[0m"
	git status
  	echo ""
	echo -e "\e[92mEscribe el comentario del commit\e[0m o \e[91mno escribas nada si no quieres commitear\e[0m"
	read commit
	echo ""
	if [[ $commit ]];  then
    	git add .
    	echo -e "\e[92m--Git commit--\e[0m"
		git commit -m "$commit"
		echo ""
		echo -e "\e[92m--Git status--\e[0m"
		git status
		echo ""
    else
    	echo -e "\e[91mNo se ha hecho commit\e[0m"
    	echo ""
	fi
}

  crearCommit
	barraDeProgreso 600
	echo ""
	
	InstaladoEnLocal=/c/Archivos\ de\ programa/Git/git-bash.exe
	InstaladoEnPendriver=/E/PROYECTO/git-bash.exe

	if [ -f $InstaladoEnLocal ]; then
        echo "Esta instalado en Local $InstaladoEnLocal"
        /c/Archivos\ de\ programa/Git/git-bash.exe ./CommitsAutomaticos.sh
	else
        echo "No esta inlatado en Local $InstaladoEnLocal"
        if [ -f $InstaladoEnPendriver ]; then
        	echo "Esta instalado en Pendriver $InstaladoEnPendriver"
        	/E/PROYECTO/git-bash.exe ./CommitsAutomaticos.sh
		else
        	echo "No esta inlatado en Pendriver $InstaladoEnPendriver"
		fi
	fi

	# if [ -f /c/Archivos\ de\ programa/Git/git-bash.exe ]; then
 #    echo "El archivo no existe!!!"
	# fi
	# #/c/Archivos\ de\ programa/Git/git-bash.exe ./CommitsAutomaticos.sh
	# /git-bash.exe ./CommitsAutomaticos.sh


	# #!/bin/bash