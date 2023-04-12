const faturamentoMensal = {
  faturamentoDiario: [1000, 1500, 800, 1200, 0, 0, 2000, 1800, 0, 2500, 3000, 3500, 0, 0, 4000, 4200, 0, 3800, 2000, 1500, 1000, 0, 0, 5000, 4500, 0, 0]
};

// Extrai os valores de faturamento diário do objeto JSON
const faturamentoDiario = faturamentoMensal.faturamentoDiario;

// Calcula o menor valor de faturamento
const menorValor = Math.min(...faturamentoDiario);

// Calcula o maior valor de faturamento
const maiorValor = Math.max(...faturamentoDiario);

// Calcula a média mensal de faturamento, ignorando os dias sem faturamento
const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0);
const mediaMensal = diasComFaturamento.reduce((soma, valor) => soma + valor, 0) / diasComFaturamento.length;

// Calcula o número de dias com faturamento superior à média mensal
const diasAcimaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;

// Exibe os resultados
console.log("Menor valor de faturamento: R$", menorValor);
console.log("Maior valor de faturamento: R$", maiorValor);
console.log("Média mensal de faturamento: R$", mediaMensal);
console.log("Número de dias com faturamento acima da média mensal:", diasAcimaMedia);

