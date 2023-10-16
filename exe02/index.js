// Criando variável
const diaSemana = Number(prompt("Digite o dia da semana"));

// Usando switch case
switch (diaSemana) {
    case 1:
        document.write("Segunda")
        break;
    case 2:
        document.write("Terça")
        break;
    case 3:
        document.write("Quarta");
        break;
    case 4:
        document.write("Quinta");
        break;
    case 5:
        document.write("Sexta");
        break;
    case 6: 
        document.write("Sábado");
        break;
    case 7: 
        document.write("Domingo");
        break;
    default:
        document.write("Digite o dia da semana");
        break;            

};