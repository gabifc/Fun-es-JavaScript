// Manipulando Números ////

// Função Par e Impar Finalizada
document.querySelector("#parImparBtn").addEventListener("click", () => {
    const inputParImpar = document.querySelector("#idParImpar").value.trim();
    if (inputParImpar === "" || inputParImpar < 1 || isNaN(inputParImpar)) {
        alert('Por favor, preencha o campo corretamente. Aceita apenas numeros positivos e inteiros.');
    } else if (inputParImpar % 2 == 0) {
        alert(`O número ${inputParImpar} é par.`);
    } else {
        alert(`O número ${inputParImpar} é impar.`);
    }
});

// Função Descubra os números Pares entre
document.querySelector("#btnNumPar").addEventListener("click", () => {
    const inputNumUm = document.querySelector("#inputNumPar").value.trim();
    const inputDoisNum = document.querySelector("#inputNumParDois").value.trim();
    let todosPares = [];
    for (let i = 1; i <= inputDoisNum; i++) {
        if (i % 2 === 0) {
            todosPares.push(i);
        }
    }
    return alert(`Os números pares entre ${inputNumUm} e ${inputDoisNum} são: ${todosPares}`);
});

// Função Perímetro Finalizada
document.querySelector("#btnRaio").addEventListener("click", () => {
    let inputRaio = document.querySelector("#inputRaio").value.trim();
    let perimetro = 0;
    if (isNaN(inputRaio)) {
        alert("Por favor, preencha o campo corretamente.");
    } else if (inputRaio > 1) {
        perimetro = 3.14 * inputRaio * 2;
        alert(`O valor do perímetro é ${perimetro.toFixed(2)}.`);
    }
})

// Função Área Finalizada
document.querySelector("#btnArea").addEventListener("click", () => {
    const inputArea = document.querySelector("#inputArea").value.trim();
    const area = (3.14 * inputArea * inputArea);
    if (inputArea === " " || isNaN(inputArea)){
        return alert("Preencha um número válido");
    } else if (inputArea*inputArea*3.14) {
        return alert(`O valor da área é ${area.toFixed(2)}.`)
    }
})

// Função número randômico entre 2 números quaisquer
document.querySelector("#numAleatorio").addEventListener("click", () => {
    let resultAleatorio = Math.floor(Math.random() * 100);
    alert(`O número aleatório gerado é: ${resultAleatorio}`)
});

// Tabuadas
document.querySelector("#btnTabuada").addEventListener("click", () => {
    const inputTab = document.querySelector("#inputTabuada").value.trim();
    const num = [0,1,2,3,4,5,6,7,8,9,10];
    num.forEach((value) => {
        total = value*inputTab;
        console.log(total);
    })
})

// Calculadora utilizando: arrow function e input com validação
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
})  
