
console.log(apresentar())

function apresentar(){
    return 'ola';
}
// diferença principal: HOISTING
// funcoes e var são listadas no topo pelo js

const soma = function(num1, num2){return num1+num2}
console.log(soma(1,1)) 
