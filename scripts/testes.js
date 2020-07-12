/*


// HTML

<h2>Tabuada</h2>
                    <input id="inputTabuada" type="text" aria-invalid="true">
                    <button id="btnTabuada" type="submit">Resultado</button>
                    <p id="resultado6"></p>

// JS
document.querySelector("#btnTabuada").addEventListener("click", (e) => {
    e.preventDefault()
    let paragrafoResults = document.querySelector("#resultado6");
    let inputTab = document.querySelector("#inputTabuada").value.trim();
    let num = [0,1,2,3,4,5,6,7,8,9,10];
    num.forEach((item, indice) => {
        total = item*inputTab;
        paragrafoResults.innerText = `${inputTab} x ${num} = ${total}`
        inputTab.appendChild(paragrafoResults)
        console.log(item, indice);
})
    })
    */

  