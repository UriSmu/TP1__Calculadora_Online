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
        if(num1 === '')
        {
            document.getElementById("suma").removeAttribute('disabled');
            document.getElementById("resta").removeAttribute('disabled');
            document.getElementById("multiplicacion").removeAttribute('disabled');
            document.getElementById("division").removeAttribute('disabled');
        }

        num1+=num;
        display.innerText = num1;
    }
    else
    {
        if(num2 === '')
        {
            document.getElementById("igual").removeAttribute('disabled');
        }

        num2+=num;
        display.innerText = `${num1} ${operacion} ${num2}`;
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

    display.innerText = resultado;

    num2 = '';
    num1 = resultado.toString();
    document.getElementById("igual").setAttribute('disabled', true);
}

function Borrar()
{
    num1 = '';
    boolOpero = false;
    num2 = '';
    resultado = 0;
    operacion = '';

    display.innerText = '';
}