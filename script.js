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
            document.getElementById("porcentaje").removeAttribute('disabled');
            document.getElementById("signo").setAttribute('disabled', true);
        }

        num1+=num;
        display.innerText = num1;
    }
    else
    {
        if(num2 === '')
        {
            document.getElementById("igual").removeAttribute('disabled');
            document.getElementById("signo").setAttribute('disabled', true);
        }

        num2+=num;
        display.innerText = `${num1} ${operacion} ${num2}`;
    }

    if(num === '.')
    {
        document.getElementById("coma").setAttribute('disabled', true);
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
    document.getElementById("signo").removeAttribute('disabled');
    document.getElementById("coma").removeAttribute('disabled');
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
    document.getElementById("suma").setAttribute('disabled' ,true);
    document.getElementById("resta").setAttribute('disabled' ,true);
    document.getElementById("multiplicacion").setAttribute('disabled' ,true);
    document.getElementById("division").setAttribute('disabled' ,true);
    document.getElementById("porcentaje").setAttribute('disabled' ,true);
    document.getElementById("signo").removeAttribute('disabled');
    document.getElementById("coma").removeAttribute('disabled');

    display.innerText = '';
}