"use strict";

let gridParent = document.getElementById("container");

// Funktion um die vom Nutzer gewünschte Größe/Anzahl der Felder anzuzeigen
function setupGrid(size) {
    if(size > 200) {
        return gridParent.innerHTML = ""; // Max. Size der Felder 200
    }
    gridParent.innerHTML = "";
    gridParent.style.gridTemplateColumns = `repeat(${size},1fr)`;
    gridParent.style.gridTemplateRows    = `repeat(${size},1fr)`;   
}