
// Declara ás variáveis
let custo = Number(prompt("Digite o custo aqui"));
let distribuidor = (custo * 28) / 100;
let imposto = (custo * 45) / 100;
let total = custo + distribuidor + imposto;

// Imprime na tela o resultado
document.write(`O custo total é ${total}.`);