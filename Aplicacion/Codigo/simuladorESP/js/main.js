console.log("Desde aqui se enviaran los datos, se civirarn y se reenderizara la vista");

// Voy a tener que haer el bucle en esta parte para que esa el propio evento.
var estufa = new Estufa();

console.log("La temperatura es de: " + estufa.getTemperatura());
console.log("La humedad es de: " + estufa.getHumedad());


// Como hacer el renderizado tendra que ser desde la propia clase

function crearDispositivo(mac){
  // Llamo al metodo addDispositivo de la lista
  // llamo al metod generar html del elemto que acavamos de añadir para genrar el html
  var contenedor = document.getElementsByTagName("section")[0];
  var dispositivo = document.createElement("div");
  dispositivo.setAttribute("class", "dispositivo");

  plantilla = plantilla.replace(/{{mac}}/g, mac);

  dispositivo.innerHTML = plantilla;
  dispositivo.classList.add("dispositivo");
  contenedor.appendChild(dispositivo);

}
