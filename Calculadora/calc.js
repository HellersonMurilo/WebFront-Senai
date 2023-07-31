const number = document.getElementById("number")
const number2 = document.getElementById("number2")
const resultado = document.getElementById("resultado")

function calculo(operacao) {
    try {
        const finalResult = eval("Number (number.value)" + operacao + "Number (number2.value)") //eval avalia se é JS

        if (isNaN(finalResult) || !isFinite(finalResult)) { //isNan e isFinite trata erros
            alert("Entrada de dados Invaálida")
            return
        }
        resultado.textContent = finalResult

        if (finalResult >= 0 && finalResult <= 49 ) {
            resultado.style.color = "red"
        }else if (finalResult >= 50 && finalResult <= 99) {
            resultado.style.color = "blue"
        }else if (finalResult >= 100) {
            resultado.style.color= "green"
        }else{
            resultado.style.color = "black"
        }

    }catch (error){
        alert (error)
    }

}
