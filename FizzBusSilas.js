
let fizzBuzzN1 = (i, n1) => i%n1==0 ? "Fizz" : ""
let fizzBuzzN2 = (i, n2) => i%n2==0 ? "Buzz" : ""
let fizzBuzzT = (n1,n2) => {
    for(let i=1; i <= 100; i++){
        console.log(i + " - " + fizzBuzzN1(i,n1) + fizzBuzzN2(i,n2))
    }
}
fizzBuzzT(10,3)