function soma(numero1, numero2){
    return numero1+numero2;
}

console.log(soma(2, 2))
console.log(soma(254, 2))
console.log(soma(-500, 6))

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade("Laryssa", 19))

function soma(numero1, numero2){
    return numero1+numero2;
}
function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2
}

console.log(multiplica(soma(4, 5)))
