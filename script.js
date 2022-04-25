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

    for (let i = 0; i < size * size; i++) {
        let gridElement = document.createElement("div");
        gridElement.addEventListener("mouseover",function () {
            const randomRed   = Math.floor(Math.random()*256);
            const randomGreen = Math.floor(Math.random()*256);
            const randomBlue  = Math.floor(Math.random()*256);
            gridElement.style.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
        })

        gridParent.appendChild(gridElement);
    }
};


// Der Wert des Nutzers soll Bei Klick auf den Button die gewünschte Anzahl bestimmen
let buttonAnzahl = document.getElementById("anzahl");
buttonAnzahl.addEventListener("click",function() {
    setupGrid(pompt("Geben sie die gwünschte Nummer der Quadrate ein. (Max. 200"));
})