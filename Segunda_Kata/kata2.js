/* 
# Segunda Kata

## Sistema Romano
Vamos a hacer un ejercicio clásico y es jugar con los números romanos y árabes.

Como refresco, vamos a ver sus símbolos y reglas.

Símbolos
Romano	Árabe
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Reglas
Sólo se contemplan números entre el 1 y el 3999

Los símbolos I, X, C y M se pueden repetir hasta tres veces.
Los símbolos V, L y D no pueden repetirse.
Los símbolos I, X y C se suman si están a la derecha de otro mayor o igual.
Los símbolos I, X y C se restan si están a la izquierda de otro mayor y solamente pueden anteponerse a los dos símbolos que le siguen en la sucesión.
I se resta de V y X
X se resta de L y C
C se resta de D y M
Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.

## Ejercicios
1. Crear una función para pasar de número romanos a árabes
2. Crear una función para pasar de árabes a romanos
3. Hacer un validador de números romanos: devolver un false si no comprende entre 1 y 3999, luego validar las reglas de repeticiones. Podemos lanzar un throw, pero solo es necesario lanzar un false.

- Cuando es necesario soltar un error.
*/