function calcularEstatisticasFaturamento(vetorFaturamento) {
  // Verifica se o vetor de faturamento está vazio
  if (vetorFaturamento.length === 0) {
    return "O vetor de faturamento está vazio.";
  }

  var menorFaturamento = vetorFaturamento[0]; // Inicia com o primeiro valor do vetor
  var maiorFaturamento = vetorFaturamento[0]; // Inicia com o primeiro valor do vetor
  var somaFaturamento = 0; // Variável para calcular a soma do faturamento
  var mediaMensal = 0; // Variável para calcular a média mensal do faturamento

  // Percorre o vetor de faturamento para calcular as estatísticas
  for (var i = 0; i < vetorFaturamento.length; i++) {
    var faturamentoDiario = vetorFaturamento[i];

    // Atualiza o menor valor de faturamento
    if (faturamentoDiario < menorFaturamento) {
      menorFaturamento = faturamentoDiario;
    }

    // Atualiza o maior valor de faturamento
    if (faturamentoDiario > maiorFaturamento) {
      maiorFaturamento = faturamentoDiario;
    }

    somaFaturamento += faturamentoDiario; // Acumula o faturamento para calcular a média mensal
  }

  mediaMensal = somaFaturamento / vetorFaturamento.length; // Calcula a média mensal

  var numDiasSuperiorMedia = 0; // Variável para contar o número de dias com faturamento superior à média

  // Percorre o vetor de faturamento novamente para contar o número de dias com faturamento superior à média
  for (var j = 0; j < vetorFaturamento.length; j++) {
    if (vetorFaturamento[j] > mediaMensal) {
      numDiasSuperiorMedia++;
    }
  }

  // Cria um objeto com as estatísticas calculadas
  var estatisticas = {
    menorFaturamento: menorFaturamento,
    maiorFaturamento: maiorFaturamento,
    mediaMensal: mediaMensal,
    numDiasSuperiorMedia: numDiasSuperiorMedia
  };

  return estatisticas;
}

// Vetor de faturamento diário (pode ser substituído pelos dados reais da distribuidora)
var vetorFaturamento = [1500, 2000, 1800, 2200, 2500, 1700, 1900];

// Chama a função para calcular as estatísticas
var estatisticas = calcularEstatisticasFaturamento(vetorFaturamento);

// Exibe as estatísticas calculadas
console.log("Menor faturamento: " + estatisticas.menorFaturamento);
console.log("Maior faturamento: " + estatisticas.maiorFaturamento);
console.log("Média mensal de faturamento: " + estatisticas.mediaM
