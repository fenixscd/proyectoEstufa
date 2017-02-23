# Ejemplo de webSocket

El método startsWith() indica si un string inicia con los caracteres de otro string, regresando true o false según sea el caso. [Url](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/startsWith)
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




## Recursos
<http://www.jasoft.org/Blog/post/La-manera-correcta-de-anadir-y-quitar-clases-CSS-a-elementos-mediante-JavaScript-puro.aspx>
http://www.w3big.com/es/js/js-htmldom-elements.html
https://developer.mozilla.org/es/docs/Web/API/Document/createElement
https://abalozz.es/plantillas-en-javascript-con-es2015/
http://www.etnassoft.com/2016/10/05/template-strings-en-es6-estudiando-las-nuevas-plantillas-de-cadena-en-javascript/

Excepciones
<https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/try...catch>








--------
