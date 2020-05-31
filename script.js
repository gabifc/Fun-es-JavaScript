// Função Par e Impar Finalizada
document.querySelector("#parImparBtn").addEventListener("click", function () {
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
document.querySelector("#btnNumPar").addEventListener("click", function () {
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

// Função Perímetro
document.querySelector("#btnRaio").addEventListener("click", function () {
    const inputRaio = document.querySelector("#inputRaio").value.trim();
    const perimetro = (3.14 * inputRaio * 2);
    alert(`O valor do perímetro é ${perimetro.toFixed(2)}.`);
})

// Função Área
document.querySelector("#btnArea").addEventListener("click", function () {
    const inputArea = document.querySelector("#inputArea").value.trim();
    const area = (3.14 * inputArea * inputArea);
    alert(`O valor da área é ${area.toFixed(2)}.`)
})


// Função número randômico entre 2 números quaisquer
document.querySelector("#numAleatorio").addEventListener("click", function () {
    let resultAleatorio = Math.floor(Math.random() * 100);
    alert(`O número aleatório gerado é: ${resultAleatorio}`)
});