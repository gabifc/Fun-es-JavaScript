// Manipulando Números ////

// Par e Impar 
document.querySelector("#parImparBtn").addEventListener("click", (e) => {
    e.preventDefault()
    let inputParImpar = document.querySelector("#idParImpar").value.trim();
    let paragrafoResults = document.querySelector("#resultado");

    if (inputParImpar == "" || inputParImpar < 1 || isNaN(inputParImpar)) {
        alert('Por favor, preencha o campo corretamente. Aceita apenas numeros positivos e inteiros.');
    } if (inputParImpar % 2 == 0) {
        paragrafoResults.innerText = `O número ${inputParImpar} é par.`
        inputParImpar.appendChild(paragrafoResults)

    } else {
        paragrafoResults.innerText = `O número ${inputParImpar} é impar.`
        inputParImpar.appendChild(paragrafoResults)
    }
});

/// Descubra os números Pares entre:
document.querySelector("#btnNumPar").addEventListener("click", (e) => {
    e.preventDefault()
    const inputNumUm = document.querySelector("#inputNumPar").value.trim();
    const inputDoisNum = document.querySelector("#inputNumParDois").value.trim();
    let paragrafoResults = document.querySelector("#resultado2");
    let todosPares = [];
    for (let i = 1; i <= inputDoisNum; i++) {
        if (i % 2 === 0) {
            todosPares.push(i);
        }
    }
    paragrafoResults.innerText = `Os números pares entre ${inputNumUm} e ${inputDoisNum} são: ${todosPares}`
    todosPares.value.appendChild(paragrafoResults)
});


// Função Perímetro 
document.querySelector("#btnRaio").addEventListener("click", (e) => {
    e.preventDefault()
    let inputRaio = document.querySelector("#inputRaio").value.trim();
    let paragrafoResults = document.querySelector("#resultado3");
    let perimetro = 0;
    if (inputRaio === " " || isNaN(inputRaio)) {
        alert("Por favor, preencha o campo corretamente.");
    } else if (inputRaio > 1) {
        perimetro = 3.14 * inputRaio * 2;
        //alert(`O valor do perímetro é ${perimetro.toFixed(2)}.`);
     paragrafoResults.innerText = `O valor do perímetro é ${perimetro.toFixed(2)}.`
    inputRaio.appendChild(paragrafoResults)
    }
   
});

// Função Área 
document.querySelector("#btnArea").addEventListener("click", (e) => {
    e.preventDefault()
    let inputArea = document.querySelector("#inputArea").value.trim();
    let paragrafoResults = document.querySelector("#resultado4");
    let area = (3.14 * inputArea * inputArea);
    if (inputArea === " " || isNaN(inputArea)){
        alert("Preencha um número válido");
    } else if (inputArea*inputArea*3.14) {
        paragrafoResults.innerText = `O valor da área é ${area.toFixed(2)}.` 
        inputArea.appendChild(paragrafoResults)
        //return alert(`O valor da área é ${area.toFixed(2)}.`)
    }
});

// Função número randômico entre 2 números quaisquer
document.querySelector("#numAleatorio").addEventListener("click", (e) => {
    e.preventDefault()
    let paragrafoResults = document.querySelector("#resultado5");
    let resultAleatorio = Math.floor(Math.random() * 100);
    paragrafoResults.innerText = `O número aleatório gerado é: ${resultAleatorio}`
   resultAleatorio.appendChild(paragrafoResults)
});

// Calculo desconto

function calcValor(){
    // zerando total
    document.getElementById("total").value = '0';
    
    // valor líquido
    let VTOTALLIQUIDO = parseFloat(document.getElementById("valor1").value);

		// desconto em porcentagem
    let DESCONTO1 = parseFloat(document.getElementById("desconto1").value);
    if( isNaN ( DESCONTO1 ) ){
    	DESCONTO1 = 0;
    }
		let PDESCONTO = parseFloat( ( VTOTALLIQUIDO * DESCONTO1 ) / 100 );

		// desconto em valor
    let VDESCONTO = parseFloat(document.getElementById("desconto2").value);
    if( isNaN ( VDESCONTO ) ){
    	VDESCONTO = 0;
    } 

    let TOTAL = parseFloat(VTOTALLIQUIDO) - parseFloat(PDESCONTO) - parseFloat(VDESCONTO);

    document.getElementById("total").value = 'R$ ' + TOTAL.toFixed(2);
}	

// // Tabuadas
// document.querySelector("#btnTabuada").addEventListener("click", () => {
//     const inputTab = document.querySelector("#inputTabuada").value.trim();
//     const num = [0,1,2,3,4,5,6,7,8,9,10];
//     num.forEach((value) => {
//         total = value*inputTab;
//         console.log(total);
//     })
// })

  //Calculadora utilizando: arrow function e input com validação
 let capturarValor1 = () => {
     valor1 = parseInt(document.querySelector(".inputUm").value.trim());
     if (valor1 === " " || isNaN(valor1)){
         alert("Inválido")
     }
 }

 let capturarValor2 = () => {
     valor2 = parseInt(document.querySelector(".inputDois").value.trim());
     if (valor2 === " " || isNaN(valor2)){
         alert("Inválido")
     }
 }

 let somar = () => {
     total = valor1 + valor2;
     alert('O total da soma é: ' + total);
 }

 let subtrair = () => {
     total = valor1 - valor2;
     alert('O total da subtração é: ' + total);
 }

 let multiplicar = () => {
     total = valor1 * valor2;
     alert('O total da multiplicação é: ' + total);
 }

 let dividir = () => {
     total = valor1 / valor2;
     alert('O total da divisão é: ' + total.toFixed(2));
 }

 let resto = () => {
     total = valor1 % valor2;
     alert('O resto da divisão é: ' + total);
 }

// Manipulando Strings ////

// Função Mês
document.querySelector("#btnMes").addEventListener("click", function () {
    let mes = parseInt(document.querySelector("#inputMes").value.trim());
    let nomeMes = "";

    switch (mes) {
        case 1:
            nomeMes = "O mês 1 é Janeiro!";
            break;
        case 2:
            nomeMes = "O mês 2 é Fevereiro!";
            break;
        case 3:
            nomeMes = "O mês 3 é Março!";
            break;
        case 4:
            nomeMes = "O mês 4 é Abril!";
            break;
        case 5:
            nomeMes = "O mês 5 é Maio!";
            break;
        case 6:
            nomeMes = "O mês 6 é Junho!";
            break;
        case 7:
            nomeMes = "O mês 7 é Julho!";
            break;
        case 8:
            nomeMes = "O mês 8 é Agosto!";
            break;
        case 9:
            nomeMes = "O mês 9 é Setembro!";
            break;
        case 10:
            nomeMes = "O mês 10 é Outubro!";
            break;
        case 11:
            nomeMes = "O mês 11 é Novembro!";
            break;
        case 12:
            nomeMes = "O mês 12 é Dezembro!";
            break;
        default:
            nomeMes = "Inválido!!!";
    }
    alert(nomeMes);
})

// Função quantos dias tem o mês
document.querySelector("#btnMesDias").addEventListener("click", function () {
    let mesDias = document.querySelector("#inputMesDias").value.toLowerCase();
    let nomeMesDias = "";

    switch (mesDias) {
        case "fevereiro":
            nomeMesDias = "Fevereiro é o mês 2 e possui 28 ou 29 dias";
            break;
        case "abril":
        case "junho":
        case "setembro":
        case "novembro": {
            let mesDiasTrinta;
            if (mesDias === "abril") {
                mesDiasTrinta = "4";
            } else if (mesDias === "junho") {
                mesDiasTrinta = "6";
            } else if (mesDias === "setembro") {
                mesDiasTrinta = "9";
            } else {
                mesDiasTrinta = "11";
            }
            alert(`${mesDias} é o mês ${mesDiasTrinta} e possui 30 dias.`)
        }
            break;
        case "janeiro":
        case "março":
        case "maio":
        case "julho":
        case "agosto":
        case "outubro":
        case "dezembro": {
            let mesDiasTrintaUm;
            if (mesDias === "janeiro") {
                mesDiasTrintaUm = "1";
            } else if (mesDias === "março" || mesDias === "marco") {
                mesDiasTrintaUm = "3";
            } else if (mesDias === "maio") {
                mesDiasTrintaUm = "5";
            } else if (mesDias === "julho") {
                mesDiasTrintaUm = "7";
            } else if (mesDias === "agosto") {
                mesDiasTrintaUm = "8";
            } else if (mesDias === "outubro") {
                mesDiasTrintaUm = "10";
            } else {
                mesDiasTrintaUm = "12";
            }
            alert(`${mesDias} é o mês ${mesDiasTrintaUm} e possui 31 dias.`)
        }
            break;
        default:
            alert("Esse mês não existe");
        }
});


// Botão Exibir Calculadora
function openClose() {
   let element = document.getElementById("exibirOcultar");
    element.classList.toggle("hidden");
}
