/*
const primeiroNumero = 5
const segundoNumero = 10.0
const terceiroNumero = 25.0

const somaDosTresValores = primeiroNumero + segundoNumero + terceiroNumero

const resultadoDaMedia = somaDosTresValores / 3 

console.log(resultadoDaMedia)
*/


// Desenhando a Função!
function calcularMedia(primeiroNumero, segundoNumero, terceiroNumero) {
  const somaDosTresValores = primeiroNumero + segundoNumero + terceiroNumero
  const resultadoDaMedia = somaDosTresValores / 3
  return resultadoDaMedia
}
// retur (primeiroNumero + segundoNumero + terceiroNumero) / 3
//Uma forma para dar o retorno mais rapido 

// Usar a Função!
const resultadoDaMediaDoMarcio = calcularMedia(5, 7, 9)
console.log('Média do Márcio: ' + resultadoDaMediaDoMarcio)

const resultadoDaMediaDaBea = calcularMedia(4, 8, 12)
console.log('Média da Bea: ' + resultadoDaMediaDaBea)


/* Pratica após 

  function somar (primeiroNumero , segundoNumero , terceiroNumero){
  const resultadoDaSoma = primeiroNumero + segundoNumero + terceiroNumero
  return resultadoDaSoma

}

const calcularMedia = somar (65,75,90) / 3
console.log(calcularMedia)

/*

