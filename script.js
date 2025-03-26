let num1 = '';
let boolOpero = false;
let num2 = '';
let resultado = 0;
let operacion = '';
let display = document.getElementById("display");
const botonSuma = document.getElementById("suma");
const botonResta = document.getElementById("resta");
const botonMulti = document.getElementById("multiplicacion");
const botonDivision = document.getElementById("division");
const botonPorcentaje = document.getElementById("porcentaje");
const botonSigno = document.getElementById("signo");
const botonIgual = document.getElementById("igual");
const botonComa = document.getElementById("coma");

function Numero(num)
{
    if(boolOpero === false)
    {
        if(num1 === '')
        {
            botonSuma.removeAttribute('disabled');
            botonResta.removeAttribute('disabled');
            botonMulti.removeAttribute('disabled');
            botonDivision.removeAttribute('disabled');
            botonPorcentaje.removeAttribute('disabled');
            botonSigno.setAttribute('disabled', true);
        }

        num1+=num;
        display.innerText = num1;
    }
    else
    {
        if(num2 === '')
        {
            display.style.color = "white";
            botonIgual.removeAttribute('disabled');
            botonSigno.setAttribute('disabled', true);
        }

        num2+=num;
        display.innerText = `${num1} ${operacion} ${num2}`;
    }

    if(num === '.')
    {
        botonComa.setAttribute('disabled', true);
    }
}

function Operar(tipoOperacion)
{
    
    if(boolOpero === false)
    {
        boolOpero = true;
    }
    else if(boolOpero === true && num2 !== '')
    {
        Resolver();
    }
    operacion = tipoOperacion;  
    display.innerText = `${num1} ${operacion}`;
    botonSigno.removeAttribute('disabled');
    botonComa.removeAttribute('disabled');
    display.style.color = "white";
}

function Resolver()
{
    if(operacion === '+')
    {
        resultado = parseFloat(num1) + parseFloat(num2);
    }
    else if(operacion === '-')
    {
        resultado = parseFloat(num1) - parseFloat(num2);
    }
    else if(operacion === '/')
    {
        resultado = parseFloat(num1) / parseFloat(num2);
    }
    else if(operacion === '*')
    {
        resultado = parseFloat(num1) * parseFloat(num2);
    }
    else if(operacion === '%')
    {
        resultado = (parseFloat(num1) / 100) * parseFloat(num2)
    }

    display.innerText = resultado;
    if (resultado > 0) {
        display.style.color = "green";
    } else {
        display.style.color = "red";
    }

    num2 = '';
    num1 = resultado.toString();
    botonIgual.setAttribute('disabled', true);
}

function Borrar()
{
    num1 = '';
    boolOpero = false;
    num2 = '';
    resultado = 0;
    operacion = '';
    display.style.color = "white";
    botonSuma.setAttribute('disabled' ,true);
    botonResta.setAttribute('disabled' ,true);
    botonMulti.setAttribute('disabled' ,true);
    botonDivision.setAttribute('disabled' ,true);
    botonPorcentaje.setAttribute('disabled' ,true);
    botonSigno.removeAttribute('disabled');
    botonComa.removeAttribute('disabled');

    display.innerText = '';
}