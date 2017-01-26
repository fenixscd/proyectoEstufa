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

Se pretende que la conexión entre los diferentes clientes y el servidor sea TCP/IP, esto permite una actualización de los datos, sin tener que hacer llamadas continuas entre clientes y servidor.

##Logica en el ESP8266

** ESTOY PENSANDO ENVIAR TODA LA LOGICA AL SERVIDOR **

El dispositivo tendra tanto como enviar datos, como interpretar los datos recividos.

Los datos recividos tendran la siguiente extructura separados por giones.
**Codigo-2Parametro**

|  Codgo | 2 Parametro | Descripción |
|--------:|:--------|--------|
|        1|Temperatura        		| Cambia la temperatura maxima |
|        2|Numero de resistencia	| Enciende la resistencia indicada |
|        3|Numero de resistencia    | Apaga la resistencia indicada |

Despues de la recepción de la recepción de cada operación se enviara un mensaje de confirmacion.
El envio de una accion, no garantiza la ejecución de la misma, el dispositivo evaluara en cada situación si dicha acción es necesaria o no.

Ejemplo:
Se indica el encendido de la resistencia 1, pero la temperatura ambiente es superior a la inicacada, la resistencia no se encendera.

Las decisiones tomadas por el dipositivo seran enviadas al servidor.

El dispositivo tendara una temperatura maxima de funcionamiento que sera de unos 40ºC, el control de temperatuara que el usuario a solicitado se guardara en el dispositivo.

El dispositivo enviara información del estado y la temperatura cada 60s. Esto no quiere decir que se gurde la información de cada envio.

Al encenderse el dispositivo intentara conectarse al servidor que estara preconfigurado, realizara 3 intentos si no lo consigue desitira hasta pasar 30 minutos, que lo volvera a intentar 3 veces.

Despues de realizada la conexión, el dispositivo solicitara en que estao se tiene que estar (encendido o apagado), en el caso de encendido, que rangos de temperatura tiene que mantener.


##Información que tengo que buscar

- socket (TCP/IP) en php
- socket en ESP8266
