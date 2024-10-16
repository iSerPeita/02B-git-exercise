let tablero = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

console.log("Vamos a comenzar el Tres en Raya");


function mostrarTablero() {
    console.log(`
        ${tablero[0][0]} | ${tablero[0][1]} | ${tablero[0][2]}
       ----------- 
        ${tablero[1][0]} | ${tablero[1][1]} | ${tablero[1][2]}
       ----------- 
        ${tablero[2][0]} | ${tablero[2][1]} | ${tablero[2][2]}
    `);
}


function verificarGanador() {
   
    for (let i = 0; i < 3; i++) {
       
        if (tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2] && tablero[i][0] !== ' ') {
            return tablero[i][0]; 
        }
        
        if (tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i] && tablero[0][i] !== ' ') {
            return tablero[0][i]; 
        }
    }

    
    if (tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2] && tablero[0][0] !== ' ') {
        return tablero[0][0]; 
    }
    if (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0] && tablero[0][2] !== ' ') {
        return tablero[0][2]; 
    }

    return null;
}

let turno = 0;
let salir = false;
let jugador = false;

while (!salir) {
    turno++; 
    let jugadorN = jugador ? 2 : 1; 
    let ficha = jugador ? "O" : "X"; 

    console.log(`Turno ${turno} - Jugador ${jugadorN}, ficha ${ficha}`);

    
    mostrarTablero();

   
    let entrada = prompt(`En qué casilla quieres poner la ficha (0-8)?`);
    let casilla = parseInt(entrada);

    
    if (casilla < 0 || casilla > 8 || isNaN(casilla)) {
        console.log("Entrada no válida, elige un número entre 0 y 8.");
        turno--;
        continue;
    }

    
    let fila = Math.floor(casilla / 3);
    let col = casilla % 3;

    
    if (tablero[fila][col] !== ' ') {
        console.log("Casilla ocupada, elige otra.");
        turno--;
        continue; 
    }

    
    tablero[fila][col] = ficha;

    
    let ganador = verificarGanador();
    if (ganador) {
        mostrarTablero(); 
        console.log(`enhorabuena jugador ${ganador} has ganado!`);
        salir = true; 
    } else if (turno === 9) {
       
        mostrarTablero(); 
        console.log("El juego ha terminado en empate.");
        salir = true; 
    }

    
    jugador = !jugador; 
}