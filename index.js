// //quadrado de um número
// var number = prompt("Digite um número");
// alert("O número é " + (number * number));

// //troca de valores
// var a, b, step;
// a = prompt("digite A");
// b = prompt("digite B");
// step = a;
// a = b;
// b = step; // antigo valor de 'a'
// alert("A ficou "+ a + " & B ficou "+b);

// //aproximação do ano que nasceu, pela idade
// var idade = prompt("digite sua idade");
// alert("você nasceu em:"+(2023-idade))

//cálculo de validação do cpf
var cpf = prompt("Digite seu CPF");
var cpfArray = cpf.split("").map(Number);
//divide a string e transfforma em números 

for (let i = 0; i < 9; i++) {
  cpfArray[i] *= (i+1);
}

alert(cpfArray.join(","));

var somatorio = 0;
for (let i = 0; i < 9; i++) {
  somatorio += cpfArray[i];
}

var digito = 0;
digito = somatorio % 11;

if (digito === 10) {
  digito = 0;
}

digito = parseInt(digito);
alert("primeiro digito: " + digito)

alert(cpfArray.join(","));

