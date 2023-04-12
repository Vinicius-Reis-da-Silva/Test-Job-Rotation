// Função para inverter uma string
function inverterString(s) {
  // Converte a string para um array de caracteres
  let arrayCaracteres = s.split('');
  
  // Define os índices inicial e final para inverter
  let inicio = 0;
  let fim = arrayCaracteres.length - 1;
  
  // Inverte os caracteres utilizando uma abordagem de dois ponteiros
  while (inicio < fim) {
    [arrayCaracteres[inicio], arrayCaracteres[fim]] = [arrayCaracteres[fim], arrayCaracteres[inicio]];
    inicio++;
    fim--;
  }
  
  // Converte o array de caracteres de volta para uma string
  return arrayCaracteres.join('');
}

// Exemplo de uso
let stringOriginal = "Hello, World!";
console.log("String original:", stringOriginal);
let stringInvertida = inverterString(stringOriginal);
console.log("String invertida:", stringInvertida);
