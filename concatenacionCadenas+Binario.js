// CONCATENACIÓN DE CADENAS CON EL BINARIO +

// AHORA VEAMOS LAS CARACTERÍSTICAS DE LOS OPERADORES DE JAVASCRIPT QUE VAN MÁS ALLA DE LA ARITMÉTICA ESCOLAR.

// NORMALMENTE EL OPERADOR + SUMA NÚMEROS.

// PERO SI SE APLICA EL + BINARIO A UNA CADENA, LOS UNE (CONCATENA).

let str = "my" + "string";
console.log(str); // 'mystring' pero si se aplica el + binario a una cadena, los une(concatena)

// ------------------------------------------------------------------------------------------------------------------------

// TENGA PRESENTE QUE SI UNO DE LOS OPERANDOS ES UNA CADENA, EL OTRO ES CONVERTIDO A UNA CADENA TAMBIÉN.

// POR EJEMPLO:

console.log('1' + 2); // 12
console.log(2 + '1'); // 21

// VIERON, NO IMPORTA SI EL PRIMER OPERANDO ES UNA CADENA O EL SEGUNDO

// AQUÍ HAY UN EJEMPLO MÁS COMPLEJO.

console.log(2 + 2 + '1'); // "41" y no "221"

// AQUÍ, LOS OPERADORES TRABAJAN UNO DESPUÉS DE OTRO. EL PRIMER + SUMA DOS NÚMEROS ENTONCES DEVUELVE 4, LUEGO EL SIGUIENTE + LE AGREGA A LA CADENA 1, ASÍ QUE SE EVALUA COMO '4 + 1 = 41'.

console.log('1' + 2 + 2); // "122", no es "14"

// AQUÍ EL PRIMER OPERANDO ES UNA CADENA, EL COMPILADOR TRATA LOS OTROS DOS OPERANDOS COMO CADENAS TAMBIÉN. EL 2 ES CONCATENADO A '1', ENTONCES ES COMO '1 + 2' = '12' Y '12 + 2' = '122'.

// EL BINARIO + ES EL ÚNICO OPERADOR QUE SOPORTA CADENAS EN ESA FORMA. OTROS OPERADORES MATEMÁTICOS TRABAJAN SOLAMENTE CON NÚMEROS Y SIEMPRE CONVIERTEN SUS OPERANDOS A NÚMEROS.

// POR EJEMPLO, RESTA Y DIVISIÓN.

console.log(2 + '9'); // 1
console.log('6' / '2'); // 3

// ------------------------------------------------------------------------------------------------------------------------