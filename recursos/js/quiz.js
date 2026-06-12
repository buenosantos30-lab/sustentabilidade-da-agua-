function resposta(correta) {
    let resultado = document.getElementById("resultado");

    if (correta) {
        resultado.innerHTML = "✅ Resposta correta! Muito bem!";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "❌ Resposta errada. Tente novamente!";
        resultado.style.color = "red";
    }
}
