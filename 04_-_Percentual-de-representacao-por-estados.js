function calcularPercentualRepresentacao(faturamentoMensal, estados) {
  var totalFaturamento = 0; // Variável para armazenar o total de faturamento mensal

  // Percorre o objeto de faturamento mensal por estado para somar o total de faturamento
  for (var estado in faturamentoMensal) {
    if (faturamentoMensal.hasOwnProperty(estado)) {
      totalFaturamento += faturamentoMensal[estado];
    }
  }

  var percentualRepresentacao = {}; // Objeto para armazenar o percentual de representação por estado

  // Percorre o objeto de faturamento mensal por estado para calcular o percentual de representação
  for (var estado in faturamentoMensal) {
    if (faturamentoMensal.hasOwnProperty(estado)) {
      var faturamentoEstado = faturamentoMensal[estado];
      var percentual = (faturamentoEstado / totalFaturamento) * 100; // Calcula o percentual de representação
      percentualRepresentacao[estado] = percentual.toFixed(2) + "%"; // Arredonda para duas casas decimais e armazena o percentual com o símbolo de percentual
    }
  }

  return percentualRepresentacao;
}

// Objeto com o faturamento mensal detalhado por estado
var faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

// Chama a função para calcular o percentual de representação
var percentualRepresentacao = calcularPercentualRepresentacao(faturamentoMensal);

// Exibe o percentual de representação de cada estado
for (var estado in percentualRepresentacao) {
  if (percentualRepresentacao.hasOwnProperty(estado)) {
    console.log(estado + ": " + percentualRepresentacao[estado]);
  }
}
