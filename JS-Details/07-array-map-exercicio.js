const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    500,
    9876,
    99,
    134
];

console.log('Arry Original:');
console.log(numeros);
const numerosMultiplicados = numeros.map((n) => {
    return n * 2;
});


console.log('Arry Modificado:');
console.log();

let textoResultado = "";
numerosMultiplicados.forEach((n) => {
    textoResultado += `${n} | ` 
});



//str.substring(0,str.length -1);
textoResultado = textoResultado.substring(0, textoResultado.length -3);
console.log(textoResultado) 