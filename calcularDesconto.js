// Biblioteca
function calcularDesconto(valorDoDesconto, valorDoProduto) {
  // Cálculo do Desconto
  const resultadoDoCalculo = valorDoProduto - valorDoDesconto

  // Retorno do Calculo do Desconto
  return resultadoDoCalculo
}

// Script
const valorFinalDaTrackinas = calcularDesconto(1.55, 3.55)
const valorFinalDoPlayStation = calcularDesconto(1500.00, 4000.00)
const valorFinalDaBicicleta = calcularDesconto(995.00, 19995.38)

console.log(valorFinalDaTrackinas)
console.log(valorFinalDoPlayStation)
console.log(valorFinalDaBicicleta)