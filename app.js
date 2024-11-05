// Função principal para sortear números aleatórios únicos dentro de um intervalo especificado
function sortear() {
    // Lê e converte o valor de entrada para a quantidade de números a serem sorteados
    const quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    // Lê e converte o valor de entrada para o número mínimo do intervalo
    const numeroMinimo = parseInt(document.getElementById('de').value);
    // Lê e converte o valor de entrada para o número máximo do intervalo
    const numeroMaximo = parseInt(document.getElementById('ate').value);

    // Verifica se os valores inseridos são válidos, caso contrário interrompe a execução
    if(!validarValores(quantidadeNumeros, numeroMinimo, numeroMaximo)) {
        return; // Encerra a função se os valores forem inválidos
    }

    // Cria um Set para armazenar números únicos sorteados
    const numerosSorteados = new Set();
    // Continua sorteando números até atingir a quantidade desejada
    while(numerosSorteados.size < quantidadeNumeros) {
        // Gera um número aleatório dentro do intervalo especificado
        const numeroAleatorio = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
        // Adiciona o número sorteado ao Set (não adiciona se já existir no Set)
        numerosSorteados.add(numeroAleatorio);
    }
    // Exibe no console o conjunto de números sorteados convertidos em um array
    console.log(Array.from(numerosSorteados));
    // Exibe os resultados na interface do usuário
    exibirResultados(Array.from(numerosSorteados));
    // Altera a classe do botão de reiniciar para torná-lo visível
    document.getElementById('btn-reiniciar').className = 'container__botao';
}

// Função para validar os valores inseridos pelo usuário
function validarValores(quantidadeNumeros, numeroMinimo, numeroMaximo) {
    // Verifica se a quantidade de números solicitada é maior do que o intervalo disponível
    if (quantidadeNumeros >= (numeroMaximo - numeroMinimo + 1)){
        alert('A quantidade de números sorteados não pode exceder o intervalo disponível.');
        return false; // Retorna falso se a condição for inválida
    }

    // Verifica se o número mínimo é maior ou igual ao número máximo
    if (numeroMinimo >= numeroMaximo) {
        alert('O número mínimo deve ser menor que o número máximo.');
        return false; // Retorna falso se a condição for inválida
    }

    // Verifica se a quantidade de números é menor ou igual a zero
    if (quantidadeNumeros <= 0){
        alert('A quantidade deve ser um número positivo.');
        return false; // Retorna falso se a condição for inválida
    }

    // Verifica se todos os valores de entrada são numéricos válidos
    if (isNaN(quantidadeNumeros) || isNaN(numeroMinimo) || isNaN(numeroMaximo)) {
        alert("Por favor, insira valores numéricos válidos.");
        return false; // Retorna falso se qualquer valor não for um número
    }

    // Retorna verdadeiro se todas as verificações acima forem aprovadas
    return true;
}

// Função para gerar um número aleatório entre o número mínimo e o máximo (inclusivo)
function gerarNumeroAleatorio(numeroMinimo, numeroMaximo) {
    return Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
}

// Função para exibir os resultados sorteados na interface do usuário
function exibirResultados(numerosSorteados) {
    // Seleciona o elemento onde os resultados serão exibidos
    const resultadoDiv = document.getElementById('resultado');
    // Limpa qualquer conteúdo anterior dentro do elemento
    resultadoDiv.innerHTML = '';
    // Cria um novo elemento de rótulo (label) para exibir os números sorteados
    const label = document.createElement('label');
    // Define a classe do rótulo para estilização
    label.className = 'texto__paragrafo';
    // Define o texto do rótulo com os números sorteados convertidos em uma string
    label.textContent = `Números sorteados: ${numerosSorteados.join(', ')}`;
    // Adiciona o rótulo ao elemento de resultados
    resultadoDiv.appendChild(label);
}

// Função para reiniciar os valores do formulário e exibir a mensagem inicial
function reiniciar() {
    // Define o conteúdo inicial do elemento de resultados
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    // Limpa o valor do campo de quantidade de números
    document.getElementById("quantidade").value = '';
    // Limpa o valor do campo de número mínimo
    document.getElementById("de").value = '';
    // Limpa o valor do campo de número máximo
    document.getElementById("ate").value = '';
    // Redefine a classe do botão de reiniciar para desabilitá-lo visualmente
    document.getElementById('btn-reiniciar').className = 'container__botao-desabilitado';
}
