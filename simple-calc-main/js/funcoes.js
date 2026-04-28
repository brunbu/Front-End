async function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat( document.getElementById('n1').value ) ;
    let n2 = parseFloat( document.getElementById("n2").value );
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;
    
    if( isNaN(n1) || isNaN(n2) ){
        document.getElementById('resultado').innerText = 'Preencha todos os números!'
    }


    //processamento
    if(op == 'soma'){
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if(op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao'){
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao'){

        if(n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }
            
    } else {
        resultado = "Operação Inválida";
    }

    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    const Calculo = {
        numero1: n1,
        numero2: n2,
        operacao: op,
        resultado: resultado
    }
    document.getElementById('resultado').innerHTML = resultado;
    const dadosSalvos = await cadastrarAPI(Calculo);
    if("error" in dadosSalvos) {
        alert(dadosSalvos.error);
    }else{
        carregar();
    }
}

/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
 function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if(valor2 == 0) {
        return 'Não é um número';
    }
    
    return valor1 / valor2;
}

function mostrar(Calculo){
    document.getElementById("cadastrar").innerHTML +=
    `
    <article class="data__card-result">
            <span><strong>Primeiro Número:</strong> ${Calculo.numero1}</span>
            <span><strong>Segundo Número:</strong> ${Calculo.numero2}</span>
            <span><strong>Operação:</strong> ${Calculo.operacao}</span>
            <span><strong>Resultado:</strong> ${Calculo.resultado}</span>
    </article> 
    `
}
async function cadastrarAPI(objCadastro){
    try {
        const response = await fetch('http://localhost:3000/Calculadora', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objCadastro)
        });
        const dadosSalvos = await response.json();
        return dadosSalvos;
    } catch (error) {
        return await{
        error: "Erro ao cadastrar cálculo"
    }}
}
async function carregar(){
    const retorno = await fetch("http://localhost:3000/Calculadora");
let dadosCadastros = await retorno.json();
console.log(dadosCadastros);

document.getElementById("cadastrar").innerHTML = "";
await dadosCadastros.forEach(Calc => {
    mostrar(Calc)});
}