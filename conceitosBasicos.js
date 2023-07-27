/* conceitos basicos */

/* 
    == comparação
    = atribuição
    === igualdade estrita (tipo e valor)
*/

var nome = "Murilo"
let idade = 19
let idadeQualquer = "19"
const anoNascimento = 2003

var isOld = true

if (idade == idadeQualquer) {
    console.log("é igual")
} else {
    console.log("nao é igual")
}

// typeof - para saber qual a tipagem de uma varivel
console.log(typeof nome);

// array
let numeros = [5, 6, "7", 8];
numeros[4] = "novoValor"; // adicionando um novo elemento no indice
//delete numeros[2]; // excluindo o elemento do índice   
//console.log(`array: ${JSON.stringify(numeros)}`);
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

//concatenar
var str = "ola pessoal"
str += ", tudo bem?"   // concatenar strings com + ou+=
console.log(str)

str.replace("pessoal", "murilo")
document.write(str);
console.log(str)



