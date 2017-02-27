# Ejemplo de webSocket

A lo mejor hay que cambiar el bucle de genración de datos, porque no puedo acceder al evento desde fuenra de la classe y eso conyeva que la clase asuma demasiadas responavilidades, como tener que pintar los objetos gestionar la conexión etc....


## General

-   [ ] Separar todos los objetos y inyectarlos en su creación.
-   [ ] Crear la clase que una los objetos con el html, que se encargara de parsear los datos.
-   [ ] Crear el protocolo de comunicación.

## main

-   [ ] Probar la inserción de dispositivo en le html


## ListaDispositivos

-   [ ] 


## Estufa

-   [ ] 

## Resistencias

-   [ ] Añadir el metodo de conexión
-   [ ] Añadir el metodo de enviar datos

















El método startsWith() verifica si un string contiene una cadena que le pasamos false/true. [Url](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/startsWith)
`String.prototype.startsWith != "function"`





var rojos = document.getElementsByClassName("rojo");
for (var i = 0; i<rojos.length; i++) {
   rojos[i].classList.remove("rojo");
   rojos[i].classList.add("verde");
}

--------

var miElto = document.getElementsByClassName("rojo")[0];
miElto.className = "verde";
y el primer elemento localizado pasaría de color rojo a verde.

Sin embargo, esto presenta un grave problema: si el elemento tenía más clases aplicadas además de "rojo", las pierde. el motivo es que ahora le estamos asignando como única clase aplicada "verde".

-------

document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");

------

Elemina el elemento
var elemento = document.getElementById("temp");
elemento.parentNode.removeChild(elemento);


-----

elemento.id ="Cambio";

---------
var fruits = ["Manzana", "Plátano"];
fruits.forEach(function (item, index, array) {
    console.log(item, index);
});

## Recursos
<http://www.jasoft.org/Blog/post/La-manera-correcta-de-anadir-y-quitar-clases-CSS-a-elementos-mediante-JavaScript-puro.aspx>
http://www.w3big.com/es/js/js-htmldom-elements.html
https://developer.mozilla.org/es/docs/Web/API/Document/createElement
https://abalozz.es/plantillas-en-javascript-con-es2015/
http://www.etnassoft.com/2016/10/05/template-strings-en-es6-estudiando-las-nuevas-plantillas-de-cadena-en-javascript/

Excepciones
<https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/try...catch>








--------
