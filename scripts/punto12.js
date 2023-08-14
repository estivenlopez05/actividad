let valor = prompt("ingrese el valor del producto")
let cuota = prompt("ingrese el numero de cuotas que vas a pagar")
let op1 = (parseInt(valor)/2)
let op2 = ((op1*.05)+op1)
let op3 = (parseInt(valor)/6)
let op4 = ((op3*.40)+op3)

alert ("tenga en cuenta la siguiente informacion")
alert ("1 cuota: paga el 0% de recargo, 2 cuotas: paga el 5% de recargo, 6 cuotas: paga el 40% de recargo")

if (cuota==1) { 
    alert("1 cuota de $ "+valor+" 0% de recargo")
}else if (cuota==2){
    alert("2 cuota de $ "+op1+" total a pagar $ "+op2+" aplicando 5% de recargo")
}else if (cuota==6){
    alert("6 cuota de $ "+op3+" total a pagar $ "+op4+" aplicando 40% de recargo")
}else{
    alert("cuotas no permitidas. ingrese el numero de cuotas")
}
