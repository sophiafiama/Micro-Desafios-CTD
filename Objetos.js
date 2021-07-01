let tenista ={
    nome: "Roger" ,
    sobrenome: "Federer",
    saudacao: function(){
        return "Quero Dormir " + this.nome
    }

};

console.log(tenista.sobrenome)
console.log(tenista.saudacao())

function Carro(marca, modelo){
    this.marca=marca; 
    this.modelo=modelo;
}

let meuCarro = new Carro("Ford", "Falcon");
let outroCarro = new Carro("Chevrolet", "Corvette");

