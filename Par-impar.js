const form = document.querySelector('form');

// Par e Impar 
form.querySelector("#parImparBtn").addEventListener("click", (e) => {
    e.preventDefault()
    let inputParImpar = form.querySelector("#idParImpar").value.trim();
    let paragrafoResults = document.querySelector("#resultado");

    if (inputParImpar === "" || inputParImpar < 1 || isNaN(inputParImpar)) {
        alert('Por favor, preencha o campo corretamente. Aceita apenas numeros positivos e inteiros.');
    } if (inputParImpar % 2 == 0) {
        paragrafoResults.innerText = `O número ${inputParImpar} é par.`
        inputParImpar.appendChild(paragrafoResults)

    } else {
        paragrafoResults.innerText = `O número ${inputParImpar} é impar.`
        inputParImpar.appendChild(paragrafoResults)
    }
});



// Descubra os números Pares entre:
form.querySelector("#btnNumPar").addEventListener("click", (e) => {
    e.preventDefault()
    const inputNumUm = form.querySelector("#inputNumPar").value.trim();
    const inputDoisNum = form.querySelector("#inputNumParDois").value.trim();
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