// Botão para calculo da média
const calculaMedia = document.querySelector("#calculaMedia");

// Onde o resultado será exibido na tela
const resultado = document.querySelector(".resultado");

// Notas das provas
const s1 = parseFloat(document.getElementById("nota1").value) * 0.08;
const s2 = parseFloat(document.getElementById("nota2").value)* 0.12;
const s3 = parseFloat(document.getElementById("nota3").value) * 0.17;
const s4 = parseFloat(document.getElementById("nota4").value) * 0.17;
const s5 = parseFloat(document.getElementById("nota5").value) * 0.17;
const s6 = parseFloat(document.getElementById("nota6").value) * 0.17;
const s7 = parseFloat(document.getElementById("nota7").value) * 0.12;
const prova = parseFloat(document.getElementById("notaProva").value) * 0.6;

const mediaAvaliativas = (s1 + s2 + s3 + s4 + s5 + s6 + s7) * 0.4
const mediaFinal = mediaAvaliativas + prova;

calculaMedia.addEventListener("click", (e) => {
    e.preventDefault()

    if (mediaFinal >= 5) {
        resultado.querySelector("span").innerHTML = `Sua média foi: ${mediaFinal} <br> Parabéns. Você Passou!`;
    } else{
        resultado.querySelector("span").innerHTML = `Sua média foi: ${mediaFinal} <br> Sinto muito, ficou de exame.`;
    };
});

