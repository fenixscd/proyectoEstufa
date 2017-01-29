#Apuntes para el servidor

Cosas que voy a ir necesitanto a medida que avance el proyecto, todas o casi todas ablaran sobre PHP, que es el lenguaje elegido para la programación del lado del servidor.

##Pasos que voy ha tener que ir dando

Montar el servidor con Apache, php y mySQL, antes que nada verificamos si php esta preparado para recivir este tipo de conexiones, para eso creamos un archivo index.php con el metodo, info(), y buscamos la linea donde nos indica si el tipo de conexión sockete esta avilitada.

![Captura de la configuración de php](./img/phpSocket.PNG "")

##Pendiente



##Sockets

Es el tipo de conexión que voy a utilizar para recivir las diferentes peticiones de los clientes.

###Proyectos y ejemplos similares

[Pagina oficial](http://php.net/manual/es/book.sockets.php)
[Ejemplo de concxión](http://www.cristalab.com/tutoriales/crear-un-socket-server-con-php-c97147l/)
[Curso que esplica los sockets](https://www.redeszone.net/curso-php-online-recopilacion-de-articulos/)

## Websockets

En la parte del servidor se programa igula que un socket normal, de todas maneras se le puede hechar un vistazo a la libreria [Ratchet](http://socketo.me/), que promete el manejo de las conexiones de este tipo.

###Proyectos y ejemplos similares

[Ejemplo y esplicación muy buenas](http://developer.firefoxmania.uci.cu/2014/05/01/websockets-en-la-practica-2/)
[Pequeño ejemplo](http://www.kabytes.com/programacion/websockets-para-php/)

## Servidor

La idea era montar dos servidores, uno que se encargse puramente de la logica y otro que se encarge de servir al cliente web, pero he pensado que eso haria una separación demasiado clara y no se entenderia del todo bien la arquitectura hexagonal.

Por lo tanto se montara un unico servidor para todo, lo unico que igual si lo ago para el desarroyo del proyecto, una separación tan clara me puede ayudar a depurar responsabilidades.

###Proyectos y ejemplos similares

