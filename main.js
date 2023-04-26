

//CALCULADORA//
function calculadora(numero1,numero2,operacion){
    switch (operacion) {
        case "+":
            return numero1 + numero2;
            break;
        case "-":
            return numero1 - numero2;
            break;
        case "*":
            return numero1 * numero2;
            break;
        case "/":
            return numero1 / numero2;
            break;
        default:
            return "operacion no identificada"
            break;      
        
    }
    
}

let numero1 = parseInt(prompt("Bienvenido!!, Ingrese el primer numero.."));
let numero2 = parseInt(prompt("Ingrese el segundo numero.."));
let operacion = prompt("Ingrese operacion a realizar..");

let resultado = calculadora(numero1, numero2, operacion);
alert(resultado);



//CAMBIO DE DIVISAS//
const monto = parseFloat(prompt('Introduzca el monto que deseas convertir:'));  
const monedaOrigen = prompt('Introduzca la moneda de origen (ejemplo: USD):');  
const monedaDestino = prompt('Introduzca la moneda de destino (ejemplo: EUR):'); 

const tasasDeCambio = {
    USD: 1.0, 
    EUR: 0.8221, 
    JPY: 108.7500 , 
    GBP: 0.7372, 
    ARS: 220.89,   
};

const tasaDeCambioOrigen = tasasDeCambio[monedaOrigen];
const tasaDeCambioDestino = tasasDeCambio[monedaDestino];

const resultadoConversion = (monto / tasaDeCambioOrigen) * tasaDeCambioDestino;
    
    

alert(`${monto} ${monedaOrigen} son ${resultadoConversion} ${monedaDestino}`);

