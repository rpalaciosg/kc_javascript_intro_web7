"use strict";
/** Kata 2 - Ejercicio 1*/
// let romanos = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
// };

let rom = ['','I','V','X','L','C','D','M'];


function romanoToArabe(romanoString) {
    let numeros = [];
    let arr = romanoString.split('');
    let numArabe = 0;

    try {
        arr.forEach((element, index)  => {
            switch (element.toString()) {
                case 'M':
                    numeros.push(1000);
                    break;
                case 'D':
                    numeros.push(500);
                    break;
                case 'C':
                    numeros.push(100);
                    break;
                case 'L':
                    numeros.push(50);
                    break;
                case 'X':
                    numeros.push(10);
                    break;
                case 'V':
                    numeros.push(5);
                    break;
                case 'I':
                    numeros.push(1);
                    break;
                default:
                    console.log(`El caracter ${arr[index]} es inválido..!`);
                    numeros[i] = 0;
                    break;                            
            }      
        });
    } catch(err){
        console.log('Error: Ingrese caracteres válidos entre [I,V,X,L,C,D,M]..!');
        
    }
    
    
    //Validación para saber si el número se suma o se resta
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < numeros[i+1]) {
            numeros[i] =- numeros[i];
        }
        if (numeros[i] >= numeros[i]) {
            numeros[i] = numeros[i];
        }
    }

    // suma todos los numeros del array
    numArabe = numeros.reduce((prev, curr) => prev + curr);
    // devuelve resultado del 
    return `El número ${romanoString} en Arabe es : ${numArabe}`;
}

/** Kata 2 - Ejercicio 2*/
let romanos = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
let valores = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

function arabesToRomanos (numero){

    let romano = '';
    let numMostrar = numero;

    for (let i = 0; i <= valores.length; i++) {
        while ( numero >= valores[i]){
            romano += romanos[i];
            numero -= valores[i];
        }   
    }

    return `El número ${numMostrar} en Romano es : ${romano}`;
}
export { romanoToArabe, arabesToRomanos };
