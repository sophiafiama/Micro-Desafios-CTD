// 1
let filmes =  ["star wars","club da luta","o poderoso chefão", "top gun", "interestelar"];
console.log(filmes[1]);

filmes[0] = filmes[0].toUpperCase()
filmes[1]= filmes[1].toUpperCase()
filmes[2]= filmes[2].toUpperCase()
filmes[3]= filmes[3].toUpperCase()
filmes[4]= filmes[4].toUpperCase()

console.log(filmes)
// let listaFilmes = filmes.join(" - ")
// console.log(listaFilmes.toUpperCase())

 let cartoons = [ "toy story", "procurando Nemo", " kung-fu panda", "wally", "fortnite"]
 cartoons.pop()
console.log(cartoons)

//  filmes.unshift("toy story", "procurando Nemo", " kung-fu panda", "wally", "fortnite")
//  console.log(filmes
    
 function cartoonFilmes(){
    filmes.unshift(cartoons[0],cartoons[1],cartoons[2],cartoons[3])
     }
     cartoonFilmes()
    console.log(filmes)
