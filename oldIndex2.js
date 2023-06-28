 const readline = require('readline');

function menu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Digite o número da atividade que deseja conferir");
  console.log("1 - Quadrado de um número\n2 - \n3 - \n4 - ");

  rl.question("Número da atividade: ", (answer) => {
    rl.close();
    const atividade = parseInt(answer);

    if (![1, 2, 3, 4].includes(atividade)) {
      console.clear();
      menu();
    } else {
      switch (atividade) {
        case 1:
          at1();
          break;
        case 2:
          // Função da atividade 2
          break;
        case 3:
          // Função da atividade 3
          break;
        case 4:
          // Função da atividade 4
          break;
        default:
          break;
      }
    }
  });
}

function at1() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Atividade 2 - Quadrado de um número");
  rl.question("Digite um número: ", (answer) => {
    rl.close();
    const numero = parseInt(answer);
    const quadrado = numero * numero;
    console.log(`O quadrado de ${numero} é ${quadrado}`);
  });
}

menu();
