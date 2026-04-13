/*// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };*/

//FUNCIONES DE CONVERSION DE MONEDAS
const oneEuroIs = {
    JPY: 156.5,
    USD: 1.07,
    GBP: 0.87
}

function fromDollarToYen(dollar){
  let euros = dollar / oneEuroIs.USD;
  return euros * oneEuroIs.JPY;
}

function fromEuroToDollar(euro){
  return euro * oneEuroIs.USD;
}

function fromYenToPound(yen){
  let euros = yen / oneEuroIs.JPY;
  return euros * oneEuroIs.GBP;
}
//pARA EXPORTARLO 
module.exports = {
  fromDollarToYen,
  fromEuroToDollar,
  fromYenToPound
};