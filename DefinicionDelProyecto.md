#PROYECTO ESTUFA

##Finalidad
La modificación del funcionamiento de una estufa, para que se manejada desde una aplicación web.

La aplicación permitira tanto el encendido y apagado, como la programación de horarios de funcionamiento y temperaturas asociadas a esos orarios.

##Premisas

###Materiales

Los materiales a utilizar seran los siguientes.
- Estufa conectada a un microcontrolador ESP8266.
- Servidor web

El ESP8266 es el dispoditivo que dotara a la estufa de una conexión wifi y controlara el encendido, apagado y temperatura, que seran enviados al servidor web.

El servidor alvergara toda la logica de funcionamiento de la estufa, y tomara decisiones cruzando los datos del estado del la estufa, con las necesidades que se allan programado para cada momento.

###Lenguajes de programación

Para el ESP8266 se va utilizar el entorno de desarroyo de Arduino, esta plataforma es una de las más estendidas y proporciona una gran cantidad de librerias.

En la parte del servidor se utilizara el lenguaje de programación PHP, lenguaje altamente extendido para la programación de paginas web.

En la parte el desarroyo para el cliente web se utilizara HTML, CSS y JavaScript, que son tambien los más extendidos en el mundo web.


###Conexiones

Se pretende que la conexión entre los diferentes clientes sea TCP/IP, esto permite una actualización de los datos, sin tener que hacer llamadas continuas entre clientes y servidores.



##Información que tengo que buscar

- socket (TCP/IP) en php

##Apuntes
###Sockets
[Pagina oficial](http://php.net/manual/es/book.sockets.php)
[Ejemplo de concxión](http://www.cristalab.com/tutoriales/crear-un-socket-server-con-php-c97147l/)
[Curso que esplica los sockets](https://www.redeszone.net/curso-php-online-recopilacion-de-articulos/)

###Arduino
Ejemplo de conexión con interruptores.
<http://androidcontrol.blogspot.com.es/2016/05/esp8266-wifi-control-relay.html>
