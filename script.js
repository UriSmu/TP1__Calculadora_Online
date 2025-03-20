let num1 = '';
let boolOpero = false;
let num2 = '';
let resultado = 0;
let operacion = '';
let display = document.getElementById("display");

function Numero(num)
{
    if(boolOpero === false)
    {
        num1+=num;
        display.innerText = num1;
    }
    else
    {
        num2+=num;
        display.innerText = `${num1} ${operacion} ${num2}`;
    }
}

function Operar(tipoOperacion)
{
    display.innerText = `${num1} ${operacion}`;
    if(boolOpero === false)
    {
        operacion = tipoOperacion;
        boolOpero = true;
    }
    else if(boolOpero === true && num2 !== '')
    {
        Resolver();
        operacion = tipoOperacion;
    }
}

function Resolver()
{
    if(operacion === '+')
    {
        resultado = parseInt(num1) + parseInt(num2);
    }
    else if(operacion === '-')
    {
        resultado = parseInt(num1) - parseInt(num2);
    }
    else if(operacion === '/')
    {
        resultado = parseInt(num1) / parseInt(num2);
    }
    else if(operacion === '*')
    {
        resultado = parseInt(num1) * parseInt(num2);
    }

    display.innerText = resultado;

    num2 = '';
    num1 = resultado.toString();
}