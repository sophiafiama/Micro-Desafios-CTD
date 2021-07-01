// Micro desafios - Etapa I

// O tech leader da equipe precisa criar um código onde seja calculado o número fatorial de um valor inteiro. Para isto, deveremos:

// Criar uma função que calcula o fatorial usando loop (for);
// Recriar esta mesma função usando recursividade (sem o uso de for)


// // Até a próxima! 

// let num = 10
// for( let i= num--; i>=1 ; i--){
// // return i*num}


// RESPOSTAS CORRETAS DO SILAS

// const fatorial = n =>{
//     let total=1
//     for(let i=n;i>1;i--){
//         total *= i
//     }
//     return total
// }
// console.log(fatorial(10))


// let multiplicaoFor = 1

// let fatoracao = n1 => {
//     for(let i=0; i < n1; i++){
//         multiplicaoFor = (n1-i)*multiplicaoFor
//     }
//     return multiplicaoFor
// }
// console.log(fatoracao(2))