// biblioteca para a leitura das infomrçoes inseridas pelo usuario
import readline from "readline";

// cria uma interface para leitura de entrada do usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// array para armazenar as propriedades de CSS inseridas pelo usuario
const propriedades = [];

// funcao para validar uma propriedade de CSS
function validarPropriedade(propriedade) {
  return propriedade.trim() !== '' && isNaN(parseFloat(propriedade));
}

// função para adicionar uma propriedade válida ao array
function adicionarPropriedade(propriedade) {
  propriedades.push(propriedade);
}

// funçao para solicitar propriedades ao usuario
function solicitarPropriedade() {
  rl.question('Digite uma propriedade de CSS (ou digite "SAIR" para finalizar o programa): ', (propriedade) => {
    if (propriedade.toUpperCase() === 'SAIR') {
      rl.close();

      // tratamento de erro para inputs vazios ou inserção de números
    } else if (validarPropriedade(propriedade)) {
      adicionarPropriedade(propriedade);
      solicitarPropriedade();
    } else {
      console.log('Propriedade inválida. Digite uma propriedade válida.');
      solicitarPropriedade();
    }
  });
}

// funçao a ser executada quando a leitura eh encerrada
rl.on('close', () => {
  
    // ordena as propriedades em ordem alfabética, o .sort gera a lista em ordem alfabetica
  propriedades.sort();
  
  // exibe as propriedades ordenadas uma por linha
  console.log('Propriedades inseridas ordenadas de A-Z:');
  propriedades.forEach((propriedade) => {
    console.log(propriedade);
  });
});

// inicia a solicitação de propriedades ao usuário
solicitarPropriedade();
