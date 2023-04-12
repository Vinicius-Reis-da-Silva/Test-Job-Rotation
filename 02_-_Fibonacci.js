// Função para calcular a sequência de Fibonacci até um determinado número
function calcularSequenciaFibonacci(n) {
  var sequencia = [0, 1]; // Inicia a sequência com os primeiros dois números
  while (sequencia[sequencia.length - 1] < n) {
    // Adiciona o próximo número da sequência
    var proximoNumero = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
    sequencia.push(proximoNumero);
  }
  return sequencia;
}

// Função para verificar se um número pertence à sequência de Fibonacci
function verificaPertenceFibonacci(numero, sequencia) {
  return sequencia.includes(numero);
}

// Número informado
var numeroInformado = 21; // Altere o número aqui

// Calcula a sequência de Fibonacci
var sequenciaFibonacci = calcularSequenciaFibonacci(numeroInformado);

// Verifica se o número informado pertence à sequência de Fibonacci
var pertence = verificaPertenceFibonacci(numeroInformado, sequenciaFibonacci);

// Exibe a sequência de Fibonacci e se o número pertence ou não à sequência
console.log("Sequência de Fibonacci até o número informado: " + sequenciaFibonacci);
console.log("O número informado " + numeroInformado + (pertence ? " pertence" : " não pertence") + " à sequência de Fibonacci.");
