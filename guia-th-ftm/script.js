function iniciar() {
    document.getElementById("pergunta").innerHTML = "1. Você é um homem trans ou pessoa transmasculina?";
    document.getElementById("conteudoInterativo").removeChild(document.getElementById("botaoIniciar"));
    const botaoSim = document.createElement("button");
    botaoSim.textContent = "Sim";
    const botaoNao = document.createElement("button");
    botaoNao.textContent = "Não";
    document.getElementById("conteudoInterativo").appendChild(botaoSim);
    document.getElementById("conteudoInterativo").appendChild(botaoNao);
    
}

