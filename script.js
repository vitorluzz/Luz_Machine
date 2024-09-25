
function converter_decimal(){

var decimal = Number(ipt_decimal.value)
var octal = decimal.toString(8)
var hexadecimal = decimal.toString(16)
var binario = decimal.toString(2)

span_decimal1.innerHTML = `<b>Decimal:</b> ${decimal}`
span_octal1.innerHTML = `<b>Octal:</b> ${octal}`
span_hexadecimal1.innerHTML = `<b>Hexadecimal:</b> ${hexadecimal.toUpperCase()}`
span_binario1.innerHTML = `<b>Binário:</b> ${binario}`

if(ipt_decimal.value == ''){
    span_mensagem_erro4.innerHTML = `ERRO! INSIRA UM VALOR VÁLIDO!`
    span_decimal1.innerHTML = null
span_octal1.innerHTML = null
span_hexadecimal1.innerHTML = null
span_binario1.innerHTML = null
        }else{
            span_mensagem_erro4.innerHTML = null
        }
    

}


function converter_octal() {
    var inputValue = ipt_octal.value;
    
    // Verifica se o input contém números não-octais (8 ou 9)
    if (/[^0-7]/.test(inputValue)) {
        span_mensagem_erro3.innerHTML = `ERRO! VALOR NÃO OCTAL. INSIRA APENAS DÍGITOS 0 A 7.`
        span_decimal2.innerHTML = '';
        span_hexadecimal2.innerHTML = '';
        span_binario2.innerHTML = '';
        return;
    }

    if (inputValue === '') {
        span_mensagem_erro3.innerHTML = `ERRO! INSIRA UM VALOR VÁLIDO.`;
        return;
    }

    var octal = parseInt(inputValue, 8);

    var decimal = octal.toString(10);
    var hexadecimal = octal.toString(16);
    var binario = octal.toString(2);

    span_decimal2.innerHTML = `<b>Decimal:</b> ${decimal}`;
    span_hexadecimal2.innerHTML = `<b>Hexadecimal:</b> ${hexadecimal.toUpperCase()}`;
    span_binario2.innerHTML = `<b>Binário:</b> ${binario}`;
    
    span_mensagem_erro3.innerHTML = null;
}

function converter_hexadecimal(){

    var hexadecimal = parseInt(ipt_hexadecimal.value, 16)

    var decimal = hexadecimal.toString(10)
    var octal = hexadecimal.toString(8)
    var binario = hexadecimal.toString(2)
    
    span_decimal3.innerHTML = `<b>Decimal:</b> ${decimal}`
    span_octal3.innerHTML = `<b>Octal:</b> ${octal}`
    span_binario3.innerHTML = `<b>Binário:</b>${binario}`

    if(ipt_hexadecimal.value == ''){
        span_mensagem_erro2.innerHTML = `ERRO! INSIRA UM VALOR VÁLIDO!`
        span_decimal3.innerHTML = ''
        span_octal3.innerHTML = ''
        span_binario3.innerHTML = ''
            }else{
                span_mensagem_erro2.innerHTML = null
            }
    
}

function converter_binario() {
    var inputValue = ipt_binario.value;

    // Verifica se o input contém valores não-binários (0 ou 1)
    if (/[^01]/.test(inputValue)) {
        span_mensagem_erro1.innerHTML = `ERRO! VALOR NÃO BINÁRIO. INSIRA APENAS DÍGITOS 0 OU 1.`;
        span_decimal4.innerHTML = '';
        span_octal4.innerHTML = '';
        span_hexadecimal4.innerHTML = '';
        return;
    }

    if (inputValue === '') {
        span_mensagem_erro1.innerHTML = `ERRO! INSIRA UM VALOR VÁLIDO!`;
        return;
    }

    var binario = parseInt(inputValue, 2);

    var decimal = binario.toString(10);
    var octal = binario.toString(8);
    var hexadecimal = binario.toString(16);

    span_decimal4.innerHTML = `<b>Decimal:</b> ${decimal}`;
    span_octal4.innerHTML = `<b>Octal:</b> ${octal}`;
    span_hexadecimal4.innerHTML = `<b>Hexadecimal:</b> ${hexadecimal.toUpperCase()}`;

    span_mensagem_erro1.innerHTML = null;
}

// Função para validar o input octal (números de 0 a 7)
function validar_octal(valor) {
    return /^[0-7]+$/.test(valor);
}

// Função para validar o input binário (números de 0 e 1)
function validar_binario(valor) {
    return /^[01]+$/.test(valor);
}

// Funções para realizar operações com Decimal
function somar_decimal() {
    var valor1 = Number(valor1_decimal.value);
    var valor2 = Number(valor2_decimal.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado_decimal.innerHTML = 'Erro! Insira valores válidos.';
    } else {
        var resultado = valor1 + valor2;
        resultado_decimal.innerHTML = `Resultado: ${resultado}`;
    }
    if(valor1_decimal.value == '' || valor2_decimal.value == ''){
        resultado_decimal.innerHTML = 'Erro! Insira valores válidos.';
            } }

function subtrair_decimal() {
    var valor2 = Number(valor2_decimal.value);
    var valor1 = Number(valor1_decimal.value);

    if (isNaN(valor1) || isNaN(valor2)) {
       resultado_decimal.innerHTML = 'Erro! Insira valores válidos.';
    } else {
        var resultado = valor1 - valor2;
        resultado_decimal.innerHTML = `Resultado: ${resultado}`;
        if(valor1_decimal.value == '' || valor2_decimal.value == ''){
            resultado_decimal.innerHTML = 'Erro! Insira valores válidos.';
                } }
    }


// Funções para realizar operações com Octal
function somar_octal() {
    var valor1 = valor1_octal.value;
    var valor2 = valor2_octal.value;

    if (!validar_octal(valor1) || !validar_octal(valor2)) {
        document.getElementById('resultado_octal').innerHTML = 'Erro! Insira valores válidos (apenas de 0 a 7).';
    } else {
        var resultado = parseInt(valor1, 8) + parseInt(valor2, 8);
        document.getElementById('resultado_octal').innerHTML = `Resultado: ${resultado.toString(8)}`;
    }
}

function subtrair_octal() {
    var valor1 = document.getElementById('valor1_octal').value;
    var valor2 = document.getElementById('valor2_octal').value;

    if (!validar_octal(valor1) || !validar_octal(valor2)) {
        document.getElementById('resultado_octal').innerHTML = 'Erro! Insira valores válidos (apenas de 0 a 7).';
    } else {
        var resultado = parseInt(valor1, 8) - parseInt(valor2, 8);
        document.getElementById('resultado_octal').innerHTML = `Resultado: ${resultado.toString(8)}`;
    }
}

// Funções para realizar operações com Hexadecimal
function somar_hexadecimal() {
    var valor1 = valor1_hexadecimal.value;
    var valor2 = valor2_hexadecimal.value;

    var resultado = parseInt(valor1, 16) + parseInt(valor2, 16);
   resultado_hexadecimal.innerHTML = `Resultado: ${resultado.toString(16).toUpperCase()}`;
   if(valor1_hexadecimal.value == '' || valor2_hexadecimal.value == ''){
    resultado_hexadecimal.innerHTML = 'Erro! Insira valores válidos.';
        } }


function subtrair_hexadecimal() {
    var valor1 = document.getElementById('valor1_hexadecimal').value;
    var valor2 = document.getElementById('valor2_hexadecimal').value;

    var resultado = parseInt(valor1, 16) - parseInt(valor2, 16);
    resultado_hexadecimal.innerHTML = `Resultado: ${resultado.toString(16).toUpperCase()}`;
    if(valor1_hexadecimal.value == '' || valor2_hexadecimal.value == ''){
        resultado_hexadecimal.innerHTML = 'Erro! Insira valores válidos.';
            }
}

// Funções para realizar operações com Binário
function somar_binario() {
    var valor1 = valor1_binario.value;
    var valor2 = valor2_binario.value;

    if (!validar_binario(valor1) || !validar_binario(valor2)) {
        document.getElementById('resultado_binario').innerHTML = 'Erro! Insira valores válidos (apenas 0 ou 1).';
    } else {
        var resultado = parseInt(valor1, 2) + parseInt(valor2, 2);
        document.getElementById('resultado_binario').innerHTML = `Resultado: ${resultado.toString(2)}`;
    }
}

function subtrair_binario() {
    var valor1 = valor1_binario.value;
    var valor2 = valor2_binario.value;

    if (!validar_binario(valor1) || !validar_binario(valor2)) {
       resultado_binario.innerHTML = 'Erro! Insira valores válidos (apenas 0 ou 1).';
    } else {
        var resultado = parseInt(valor1, 2) - parseInt(valor2, 2);
        esultado_binario.innerHTML = `Resultado: ${resultado.toString(2)}`;
    }
}