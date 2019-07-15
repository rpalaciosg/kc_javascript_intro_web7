import { FooBarQuix } from './Primera_Kata/kata1.mjs';
import { romanoToArabe, arabesToRomanos } from './Segunda_Kata/kata2.mjs';

// Pruebas kata 1
console.log(`
=============================================================
=                     Resultados Kata 1                     =
=============================================================`);
console.log(FooBarQuix(1));
console.log(FooBarQuix(2));
console.log(FooBarQuix(3));
console.log(FooBarQuix(4));
console.log(FooBarQuix(5));
console.log(FooBarQuix(6));
console.log(FooBarQuix(7));
console.log(FooBarQuix(8));
console.log(FooBarQuix(9));
console.log(FooBarQuix(10));
console.log(FooBarQuix(13));
console.log(FooBarQuix(15));
console.log(FooBarQuix(21));
console.log(FooBarQuix(33));
console.log(FooBarQuix(35));
console.log(FooBarQuix(51));
console.log(FooBarQuix(53));
console.log(FooBarQuix(75));
console.log(FooBarQuix(98));
console.log(FooBarQuix(100));

// Pruebas kata 2
console.log(`
=============================================================
=                     Resultados Kata 2                     =
=============================================================`);
console.log(`
--------------------------------------------
-           Kata 2 - Ejercicio 1           -
--------------------------------------------`);
console.log(romanoToArabe('XVRI'));
console.log(romanoToArabe('XCV'));
console.log(romanoToArabe('XLV'));
console.log(romanoToArabe('IX'));
console.log(romanoToArabe('XXX'));

console.log(`
--------------------------------------------
-           Kata 2 - Ejercicio 1           -
--------------------------------------------`);
console.log(arabesToRomanos(1986));
console.log(arabesToRomanos(3323));
console.log(arabesToRomanos(1323));
console.log(arabesToRomanos(323));
console.log(arabesToRomanos(33));