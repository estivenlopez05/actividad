let exam1 = prompt("ingrese nota de examen 1");
let exam2 = prompt("ingrese nota de examen 2");
let exam3 = prompt("ingrese nota de examen 3");

let note1 = parseFloat (exam1* 0.25);
let note2 = parseFloat (exam2* 0.25);
let note3 = parseFloat (exam3* 0.50);

let average = (note1+note2+note3)

alert("your average is: " + average)