//LOGIN Y REGISTRARSE//

const usuariosRegistrados = [
    { usuario: 'usuario1', contraseña: 'contraseña1' },
    { usuario: 'usuario2', contraseña: 'contraseña2' },
    { usuario: 'usuario3', contraseña: 'contraseña3' }
];

  // erificar el inicio de sesión
function iniciarSesion() {
    const usuario = prompt('Usuario:');
    const contraseña = prompt('Contraseña:');

    // Verificar si el usuario existe y la contraseña es correcta
    const usuarioEncontrado = usuariosRegistrados.find((usuarioRegistrado) => usuarioRegistrado.usuario === usuario);

    if (usuarioEncontrado && usuarioEncontrado.contraseña === contraseña) {
    alert('Inicio de sesión exitoso');
    } else {
    alert('Usuario o contraseña incorrectos');
    }
}

  //  registrar un nuevo usuario
function registrarUsuario() {
    const usuario = prompt('Nuevo usuario:');
    const contraseña = prompt('Contraseña:');

    // Verificar si el usuario ya existe
    const usuarioExistente = usuariosRegistrados.find((usuarioRegistrado) => usuarioRegistrado.usuario === usuario);

    if (usuarioExistente) {
        alert('El usuario ya existe. Por favor, elija otro nombre de usuario.');
    } else {
      // Agregar usuario
    usuariosRegistrados.push({ usuario, contraseña });
        alert('Registro exitoso. Ahora puedes iniciar sesión con tu nuevo usuario.');
    }
}


const opcion = parseInt(prompt('Selecciona una opción:\n1. Iniciar sesión\n2. Registrarse'));

switch (opcion) {
    case 1:
        iniciarSesion();
        break;
    case 2:
        registrarUsuario();
        break;
    default:
        alert('Opción inválida');
        break;
}


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

var menuHolder = document.getElementById('menuHolder')
    var siteBrand = document.getElementById('siteBrand')
    function menuToggle(){
        if(menuHolder.className === "drawMenu") menuHolder.className = ""
        else menuHolder.className = "drawMenu"
    }
        if(window.innerWidth < 426) siteBrand.innerHTML = "MAS"
    window.onresize = function(){
        if(window.innerWidth < 420) siteBrand.innerHTML = "MAS"
        else siteBrand.innerHTML = "MY AWESOME WEBSITE"
    }