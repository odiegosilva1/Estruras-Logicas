//Declarando variavel
let temperaturaCelsius = Number(prompt("Digite a temperatura"));
let  conversorFarenheit = (temperaturaCelsius * 9/5) + 32;

//Imprime na tela o resultado
document.write(`${temperaturaCelsius} °C em Fahrenheit são: ${conversorFarenheit} °F`);