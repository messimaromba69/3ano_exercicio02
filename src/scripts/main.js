// Captura o evento de submit do formulário
document.getElementById('form-sorteador').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Captura o valor máximo inserido no input
    const numeroMaximo = parseInt(document.getElementById('numero-maximo').value);

    // Verifica se o valor máximo é válido (maior que 1)
    if (numeroMaximo < 2) {
        alert('O número máximo deve ser pelo menos 2.');
        return;
    }

    // Gera um número aleatório entre 1 e o número máximo
    const numeroSorteado = Math.floor(Math.random() * numeroMaximo) + 1;

    // Exibe o número sorteado
    const resultadoElement = document.getElementById('resultado-valor');
    resultadoElement.textContent = numeroSorteado;

    // Torna a área de resultado visível
    document.querySelector('.resultado').style.display = 'block';
});
