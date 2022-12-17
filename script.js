// Botão para calculo da média
const calculaMedia = document.querySelector("#calculaMedia");

// Onde o resultado será exibido na tela
const resultado = document.querySelector(".resultado");

// Notas das provas
const n1 = parseFloat(document.getElementById("nota1").value) * 0.08;
const n2 = parseFloat(document.getElementById("nota2").value) * 0.12;
const n3 = parseFloat(document.getElementById("nota3").value) * 0.17;
const n4 = parseFloat(document.getElementById("nota4").value) * 0.17;
const n5 = parseFloat(document.getElementById("nota5").value) * 0.17;
const n6 = parseFloat(document.getElementById("nota6").value) * 0.17;
const n7 = parseFloat(document.getElementById("nota7").value) * 0.12;
const prova = parseFloat(document.getElementById("notaProva").value) * 0.6;

const mediaAvaliativas = (n1 + n2 + n3 + n4 + n5 + n6 + n7) * 0.4
const mediaFinal = mediaAvaliativas + prova;

calculaMedia.addEventListener("click", (e) => {
    e.preventDefault()

    if (mediaFinal >= 5) {
        resultado.querySelector("span").innerHTML = `Sua média foi: ${mediaFinal} <br> Parabéns. Você Passou!`;
    } else{
        resultado.querySelector("span").innerHTML = `Sua média foi: ${mediaFinal} <br> Sinto muito, ficou de exame.`;
    };
});

