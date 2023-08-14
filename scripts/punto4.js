// calmecase
let valueByHour = 2000
let quantityOfHour = prompt("ingrese la cantidad de horas")
let quantityOfMinutes = prompt("ingrese la cantidad de minutos")

let totalPrice = 0

if (quantityOfMinutes > 0) {
    quantityOfHour = parseInt(quantityOfHour) + 1
}

totalPrice = quantityOfHour * valueByHour

alert("el precio que debe de pagar es: "+ totalPrice)