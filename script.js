const titulo = document.getElementById("container") //pegar o elemento pelo o ID
const nomeInput = document.getElementById("nome") //pegar o elemento pelo o ID
const resultado = document.getElementById("resultado") //pegar o elemento pelo o ID
const telefone = document.getElementById("telefone") //pegar o elemento pelo o ID
const email = document.getElementById("email") //pegar o elemento pelo o ID
 
console.log(titulo.textContent)

titulo.textContent = "Senai Cotia 2023"

function salvar() {
    resultado.textContent = nomeInput.value
    emailCliente.textContent = email.value
    telefoneCliente.textContent = telefone.value
}