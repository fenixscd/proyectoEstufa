#!/bin/sh
#Ejecutar commits automaticos


function barraDeProgreso(){

	local fraccion=`expr $1 / 10`

	echo -ne '[......................] (0%)\r'
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
	echo -ne '[######################] (100%)\r'
}

clear
while [ true ]
do
  DIA=`date +"%d/%m/%Y"`
  HORA=`date +"%H:%M"`
	clear
  echo "Hoy es el $DIA y la hora actual es $HORA!"
  sleep  20
  git add .
  git commit -m "Commit automatico $DIA -- $HORA"
	echo ''
	barraDeProgreso 1200
done
