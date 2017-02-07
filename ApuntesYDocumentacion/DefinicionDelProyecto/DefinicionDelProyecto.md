#PROYECTO ESTUFA

##Finalidad
La modificación del funcionamiento de una estufa para que sea manejada desde una aplicación web.

La aplicación permitirá tanto el encendido y apagado, como la programación de horarios de funcionamiento y temperaturas asociadas a esos horarios.

##Premisas

###Materiales

Para el proyecto dividiremos el material en dos grupos, uno que representa los componenetes fisicos y otro la infrastructura.


1. Microcontrolador ESP8266, encargado de dotar a la estufa de una conexión wifi y que pueda ser controlada de manera remota.
2. Dos reles que se conectaran a las resistencias de la estufa.
3. Un sensor de temperatura y humedad.
4. Raspberry PI que hara de servidor local.
4. Ruter para hacer las simulaciones en local.
5. Un ordenador con 3 maquinas virtules que correran un servidor dada una.

El la Raspberry albergará toda la lógica de funcionamiento de la estufa y tomará decisiones cruzando los datos del estado de la estufa con las necesidades que se hayan programado para cada momento.

La Raspberry hira se conectara al servidor web para hacer de puente entre los dispositivos y las conexiones externas de la red local.

###Lenguajes de programación

Para el ESP8266 se va utilizar el entorno de desarroyo de Arduino, esta plataforma es una de las más extendidas y proporciona una gran cantidad de librerías.

La Raspberry PI y el servidor web se programarar con el mismo lenguaje PHP, para no tener que divesificar en otro lenguaje.

En la parte del desarroyo para el cliente web se utilizara HTML, CSS y JavaScript, que son tambien los más extendidos en el mundo web.


### Comunicaciones

Se pretende que la comunicación los diferentes deispositovos ESP con la Rasberry PI el servidor sea TCP/IP, esto permite una actualización de los datos, sin tener que hacer llamadas continuas entre clientes y servidor.

##Logica en el ESP8266

** ESTOY PENSANDO ENVIAR TODA LA LOGICA AL SERVIDOR**

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


## PHP

http://php.net/manual/es/language.oop5.iterations.php


##Información que tengo que buscar

- socket (TCP/IP) en php
- socket en ESP8266
