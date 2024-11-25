alert("Bem-vindos ao jogo do número secreto");
let numeroMaximo = 5000;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let tentativa;
let numeroDeTentativas = 1;

while (true) {
    tentativa = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    
    // Validação de entrada
    if (tentativa === null) {
        alert('Jogo cancelado');
        break;
    }
    
    // Converte para número e verifica se é válido
    tentativa = parseInt(tentativa);
    if (isNaN(tentativa)) {
        alert('Por favor, digite um número válido');
        continue;
    }
    
    // Verifica se está dentro do intervalo
    if (tentativa < 1 || tentativa > numeroMaximo) {
        alert(`Por favor, digite um número entre 1 e ${numeroMaximo}`);
        continue;
    }
    
    if (tentativa === numeroSecreto) {
        break;
    } else if (tentativa > numeroSecreto) {
        alert(`Você errou, tente novamente. O número secreto é menor que ${tentativa}.`);
    } else {
        alert(`Você errou, tente novamente. O número secreto é maior que ${tentativa}.`);
    }
    
    numeroDeTentativas++;
}

// Só mostra mensagem de vitória se o jogo não foi cancelado
if (tentativa === numeroSecreto) {
    let palavraTentativa = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${numeroDeTentativas} ${palavraTentativa}.`);
}
