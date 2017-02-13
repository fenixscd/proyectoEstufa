# Apuntes para el ESP8266

Cosas que voy a ir necesitando a medida que avance el proyecto, seguramente haya muchas referencias a documentación de arduino, ya que voy a utilizar su id para la programación del ESP^1

## Material necesario
Lista de los diferentes componentes que van a ir conectados al ESP:
-   2 Relés de 10A a 220V.
-   1 Sensor de temperatura y humdedad DHT-11.



## Pendiente
-   2 Relés de 10A a 220V con [opto acopladores](opto acopladores)
-   1 Sensor de temperatura y humdedad DHT-11.
-   Que es un Websocket


## Sockets
Tipo de conexión TCP/IP, que voy a utilizar para comunicarme con el servidor.


## Websocket

[Ejemplo Websocket en github](https://github.com/morrissinger/ESP8266-Websocket/blob/master/examples/WebSocketClient_Demo/WebSocketClient_Demo.ino)


### Proyectos y ejemplos similares

*   [Ejemplo de tres relés con display](http://androidcontrol.blogspot.com.es/2016/05/esp8266-wifi-control-relay.html)
*	[Ejemplo de dos relés con display](http://androidcontrol.blogspot.com.es/2016/05/esp8266-iot-thingspeak-control-relay.html)
*	[Ejemplo avisador de correo GMail con display](http://www.areresearch.net/2016/07/gmail-notifier-with-esp8266-nodemcu.html)

## Sensor de temperatura
### Proyectos y ejemplos similares
*	[Vídeo de explicación](https://www.youtube.com/watch?v=5VkOC7NxRlE&t=610s)
*	[Lista de tutorial bastante interesante (Python)](https://www.youtube.com/watch?v=zmaKHIRy4J0&list=PL1Hs_F1k2mdStrLUIj8ZdSiD9eadMqTYe)
*	[Proyecto estación meteorológica muy bueno](https://learn.adafruit.com/wifi-weather-station-with-tft-display/)

## Reles

Que tenga opto acoplador para que haya una mayor separación entre la electronica y  el rele para evitar rebotes.

Por el pin Vim tenemos salida de 5V

### Proyectos y ejemplos similares

[Ejemplo de conexión del rele](https://www.youtube.com/watch?v=D_rYB9KWuAM)


***
^1 ESP: Micro controlador ESP8266
