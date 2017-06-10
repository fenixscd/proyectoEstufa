Pequeño tutorial de Raspberry Pi
http://agrportfolioeducativo.blogspot.com.es/2016/08/listado-raspberry-pi.html

Ips utilizadas en una red
~~~~
  sudo nmap -sP 192.168.43.1-254
~~~~

# Configuración de dirección IP fija para el interfaz eth0

~~~~
sudo nano /etc/network/interfaces
~~~~

~~~~
auto eth0
iface eth0 inet static
address 192.168.1.122
netmask 255.255.255.0
network 192.168.1.0
broadcast 192.168.1.255
gateway 192.168.1.1
~~~~