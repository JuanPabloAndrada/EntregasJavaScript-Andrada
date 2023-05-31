//*INICIAR SESION Y REGISTRARSE*//

// Obtener elementos de inicio de sesión y registro
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');

// Obtener usuarios almacenados o inicializar un array vacío
const storedUsers = localStorage.getItem('users');
const users = storedUsers ? JSON.parse(storedUsers) : [];

// Función para agregar un nuevo usuario
function addUser(username, password) {
  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
}

// verificar el inicio de sesióm
function login() {
  const username = prompt('Usuario:');
  const password = prompt('Contraseña:');

  // Verificar si el usuario existe y la contraseña es correcta
  const user = users.find((user) => user.username === username);

  if (user && user.password === password) {
    alert('Inicio de sesión exitoso');
  } else {
    alert('Usuario no identificado');
  }
}

//  eventos a los enlaces de inicio de sesión y registro
loginLink.addEventListener('click', function(event) {
  event.preventDefault();
  login();
});

registerLink.addEventListener('click', function(event) {
  event.preventDefault();
  const username = prompt('Nuevo usuario:');
  const password = prompt('Contraseña:');
  addUser(username, password);
  alert('Usuario registrado exitosamente');
});


//CALCULADORA//
let Numero = '';
let Operacion = '';
let Resultado = '';

function añadirNumero(num) {
    Numero += num;
    document.getElementById('display').value = Numero;
}

function añadirOperacion(op) {
    Operacion = op;
    Resultado = Numero;
    Numero = '';
}

function clearDisplay() {
    Numero = '';
    Operacion = '';
    Resultado = '';
    document.getElementById('display').value = '';
}

function calcular() {
let calculationResult = 0;
    switch (Operacion) {
        case '+':
        calculationResult = parseFloat(Resultado) + parseFloat(Numero);
        break;
        case '-':
        calculationResult = parseFloat(Resultado) - parseFloat(Numero);
        break;
        case '*':
      calculationResult = parseFloat(Resultado) * parseFloat(Numero);
    break;
        case '/':
        calculationResult = parseFloat(Resultado) / parseFloat(Numero);
        break;
    default:
        break;
}

clearDisplay();
    document.getElementById('display').value = calculationResult;
}




//CAMBIO DE DIVISAS//
function convertirDivisas() {
    const cantidad = parseFloat(document.getElementById('amount').value);
    const deMoneda = document.getElementById('from').value;
    const aMoneda = document.getElementById('to').value;

    const tasasDeCambio = {
    ARS: {
        USD: 0.011,
        GBP: 0.008,
        JPY: 1.21,
        EUR: 0.009
        },
    USD: {
        ARS: 91.25,
        GBP: 0.72,
        JPY: 109.46,
        EUR: 0.82
        },
    GBP: {
        ARS: 123.51,
        USD: 1.38,
        JPY: 151.44,
        EUR: 1.14
        },
    JPY: {
        ARS: 0.83,
        USD: 0.0091,
        GBP: 0.0066,
        EUR: 0.0075
        },
    EUR: {
        ARS: 111.50,
        USD: 1.21,
        GBP: 0.88,
        JPY: 133.58
        }
    };

    const conversion = cantidad * tasasDeCambio[deMoneda][aMoneda];
    document.getElementById('conversionResult').value = conversion.toFixed(2);
}

/*DIVISAS*/
const divisas = [
    { divisa: 'USD', tasa: 1.21 },
    { divisa: 'EUR', tasa: 0.88 },
    { divisa: 'GBP', tasa: 1.38 },
    { divisa: 'JPY', tasa: 109.46 },
    { divisa: 'ARS', tasa: 91.25 },
    
    // Agrega más divisas si es necesario
    ];

const divisasTable = document.getElementById('TablaDivisas');
const tbody = divisasTable.querySelector('tbody');

    divisas.forEach((divisa) => {
        const fila = document.createElement('tr');
        const divisaCell = document.createElement('td');
        const tasaCell = document.createElement('td');

    divisaCell.textContent = divisa.divisa;
    tasaCell.textContent = divisa.tasa.toFixed(2);

    fila.appendChild(divisaCell);
    fila.appendChild(tasaCell);
    tbody.appendChild(fila);
});
