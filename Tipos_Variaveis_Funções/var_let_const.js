// var - funciona em qualquer parte do codigo, carrega primeiro
// problema: mesmo nome de variavel em varias partes do codigo

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;

//console.log(area);

//var area;

//let forma = 'retangulo';
//let altura = 5;
//let comprimento = 7;
//let area;

//if (forma === 'retangulo') {
   // area = altura * comprimento; 

//} else {
    //area = (altura * comprimento) / 2;
//}

//console.log(area);

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * altura;
} else {
    area = (altura * comprimento)/2
}
area = altura * comprimento;
console.log(area)
