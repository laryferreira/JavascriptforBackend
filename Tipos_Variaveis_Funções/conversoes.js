// tipo de dado
// booleanos

// conversao implicita

const numero = 456;
const numeroString = '456';

console.log(numero == numeroString); // === % == (converteu o numero em string e comparou)
// pode trazer bugs para o código

console.log(numero + numeroString); // concatenação

// conversao explicita

//Number() -> string em numero
console.log(numero + Number(numeroString));

//String() -> numero em uma string

//NAN se tiver uma letra ou simbolo
