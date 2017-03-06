var plantilla =

            dispositivo{{mac}}
            modo{{mac}}
            conexion{{mac}}
            temp{{mac}}
            '<h2>H: <span id="hume{{mac}}">10</span>%</h2>' +
        '</div>' +
        '<div class="programacion">' +
            '<p class="izq">Resis 1 [<span id="resis1encendida{{mac}}">*</span>]: <span id="resis1Esta{{mac}}">ON</span> <span id="resis1Temp{{mac}}">27</span>º</p>' +
            '<p class="der">Hora <span id="hora1{{mac}}">6:25</span> <span id="hora1Cambio{{mac}}">OFF</span> <span id="hora1Temp{{mac}}">27</span>º</p>' +

            '<p class="izq">Resis 2 [<span id="resis2encendida{{mac}}"> </span>]: <span id="resis2Esta{{mac}}">OFF</span> <span id="resis2Temp{{mac}}"></span></p>' +
            '<p class="der">Hora <span id="hora2{{mac}}">6:25</span> <span id="hora2Cambio{{mac}}">ON</span> <span id="hora2Temp{{mac}}">27</span>º</p>' +
        '</div>' +
    '</div>' +
'</div>' +
'<div class="botonera">' +
    '<form>' +
        '<input type="button" value="+" onclick="hacer_click()"/>' +
        '<input type="button" value="M" onclick="hacer_click()"/>' +
        '<input type="button" value="-" onclick="hacer_click()"/>' +
    '</form>';
