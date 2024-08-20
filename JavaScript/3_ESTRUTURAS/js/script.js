// 1 - Váriaveis
let nome = "Pedro";

console.log(nome);

nome = "Pedro Henrique Panstein";

console.log(nome);

const idade = 17;
console.log(idade);
// idade = 18; Uma constante não muda

console.log(typeof nome);
console.log(typeof idade);

// 2 - Mais sobre variáveis
// let 2teste = "Inválido";
// let @teste = "Inválido";

let a = 10,
  b = 20,
  c = 30;

console.log(a, b, c);

const nomecompleto = "Pedro Henrique";
const nomeCompleto = "Pedro Panstein";

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok";
let $teste = "ok";

console.log(_teste, $teste);

// 3 - prompt
const age = prompt("Digite a sua idade: ");

console.log(`Você tem ${age} anos`);

// 4 - alert
alert("Este é um alerta");

const z = 10;
alert(`O numero é ${z}`);

// 5 - Math
console.log(Math.max(5, 2, 1, 10)); // retorna o valor máximo
console.log(Math.min(1, 2, 3, 4, 5)); // retorna o valor minimo
console.log(Math.abs(10.25347625716)); // retorna o valor absoluto
console.log(Math.pow(7, 2)) // Mesma lógica do java 7 = numero, 2 = elevado á

console.log(Math.floor(5.9)); // arrendonda para baixo
console.log(Math.ceil(5.1)); // arrendonda para cima
console.log(Math.round(5.6)); // arrendonda o número da maneira correta

// 6 - Console
console.log("teste!");

console.error("erro falso!");

console.warn("aviso falso!");

console.info("info");

// console.clear(); //limpa o console

console.trace(); //não entendi muito bem, mas ele rastreia algo

// 7 - if
const m = 10;

if (m > 5) {
  console.log("M é maior que 5!");
}

const user = "Jenni";

if (user === "Pedro") {
  console.log(`${user} é lindo`);
}

if (user === "Jenni") {
  console.log(`${user} é linda`);
}

console.log(user === "Pedro", user === "Jenni");

// 8 - else
const loggedIn = false;

if (loggedIn) {
  console.log("Está autenticado");
} else {
  console.log("Não está autenticado");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
  console.log("Números mais altos");
} else {
  console.log("Os números não são mais altos");
}

// 9 - else if
const x = 20;

if (q === 2) {
  console.log(`${q} é igual a 2`);
} else if (q === 10) {
  console.log(`${q} é igual a 10`);
} else if (q === 20) {
  console.log(`${q} é igual a 20`);
}

const userName = "Pedro";
const userAge = 17;

if (userName === "José") {
  console.log("Bem vindo José!");
} else if (userName === "Pedro" && userAge === 17) {
  console.log("Olá Pedro, você tem 17 anos");
} else {
  console.log("Nenhuma condição acima");
}

// 10 - while
let p = 0;

while (p < 5) {
  console.log(`Repetindo ${p}`);
  p++;
}

// Loop infinito
// let s = 10

// while (s > 5) {
//     console.log(`${s}`)
// }

// 11 - do while
let o = 10;
do {
  console.log(`Valor de o: ${o}`);
  o--;
} while (o > 1);

// 12 - for
for (let t = 0; t < 10; t++) {
  console.log("Repetindo algo...");
}

let r = 10;

let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1012];

aa.forEach((num) => {
  // é tipo o forEach do java
  console.log(num);
});

for (r; r > 0; r--) {
  console.log(`O R está diminuindo ${r}`);
}

// 13 - identação
for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10`);
  } else {
    if (u / 2 === 0) {
      console.log("Deu 0");
    }
  }
}

// 14 - break
for (let g = 20; g > 10; g--) {
  console.log(`O valor de g é: ${g}`);

  if (g === 12) {
    console.log("O g é igual a 12");
    break;
  }
}

// 15 - continue
for (let l = 0; l < 10; l = l + 1) {
  // operador resto = %
  if (l % 2 === 0) {
    console.log("Numero par!");
    continue;
  }
  console.log(l);
}

// 16 - switch
const job = "Programador";

switch (job) {
  case "Advogado":
    console.log("Você é um Advogado");
    break;
  case "Programador":
    console.log("Você é um Programador");
    break;
  case "Médico":
    console.log("Você é um Médico");
    break;
  case "Professor":
    console.log("Você é um Professor");
    break;
  default:
    console.log("Profissão não encontrada");
}

// // switch "errado"
const j = 100;

switch (j) {
  case 200:
    console.log("J é 200!");
    break
  case 100:
    console.log("J é 100!");
  case 10:
    console.log("J é 9!");
  default:
    console.log("O J não foi encontrado");
}
