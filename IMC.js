function calcularIndiceDeMassaCorporal(peso, altura){
  let metros= altura/100
    return (peso/(metros*metros)).toFixed(2)
}

console.log (calcularIndiceDeMassaCorporal(95,167))
