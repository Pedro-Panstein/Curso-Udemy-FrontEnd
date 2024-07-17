// // 1 - Criando uma função
// function minhaFuncao() {
//     console.log("testando")
// }

// minhaFuncao()
// minhaFuncao()

// const minhaFuncaoEmVariavel = function () {
//     console.log("Função sem variável")
// }

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt) {
//     console.log(`Imprimindo: ${txt}`)
// }

// funcaoComParametro("Imprimindo alguma coisa")

// funcaoComParametro("outra função")

// // 2 - return
// const a = 10
// const b = 20
// const c = 30
// const d = 40

// function soma(n1, n2) {
//     return n1 + n2;
// }

// const resultado = soma(a, b)

// console.log(soma(a, b))
// console.log(soma(c, d))

// // 3 - escopo da função
// let y = 10

// function testandoEscopo() {
//     let y = 20
//     console.log(`Y dentro da função é: ${y}`)
// }

// testandoEscopo()

// console.log(`Y fora da função é ${y}`)

// testandoEscopo()

// // 4 - escopo aninhado
// let m = 10

// function escopoAninhado() {
//     let m = 20

//     if (true) {
//         let m = 30
//         if (true) {
//             let m = 40
//             console.log(m)
//         }
//         console.log(m)
//     }
//     console.log(m)
// }

// escopoAninhado()

// console.log(m)

// // 5 - arrow function
// const testeArrow = () => {
//     console.log("Esta é uma arrow function")
// }

// testeArrow()

// const parOuImpar = (n) => {
//     if (n % 2 === 0) {
//         console.log("Par")
//         return
//     }
//     console.log("Impar")
// }

// parOuImpar(5)
// parOuImpar(10)

// // - 6 mais sobre arrow functions
// const raizQuadrada = (x) => {
//     return x * x
// }

// console.log(raizQuadrada(4))

// const raizQuadrada2 = (x) => x * x

// console.log(raizQuadrada(5))
// console.log(raizQuadrada(12))

// const helloWord = () => console.log("Hello Word")

// helloWord()

// // 7 - parametro opcional
// const multiplicacao = function (m, n) {
//     if (n === undefined) {
//         return m * 2
//     } else {
//         return m * n
//     }
// }

// console.log(multiplicacao(5))
// console.log(multiplicacao(5, 10))

// const greeting = (name) => {
//     if (!name) {
//         console.log("Olá!")
//         return
//     }

//     console.log(`Olá ${name}`)
// }

// greeting()
// greeting("Pedro")

// // 8 - default
// const customGreeting = (name, greet = "Olá") => {
//     return `${greet}, ${name}`
// }

// console.log(customGreeting("Pedro"))
// console.log(customGreeting("João", "Bom dia"))

// const repeatText = (text, repeat = 2) => {
//     for(let i = 0; i < repeat; i++){
//         console.log(text)
//     }
// }

// repeatText("Testando");
// repeatText("Agora repete 5 vezes", 5)

// // 9 - closure
// function someFunction() {
//     let txt = "Alguma coisa"

//     function display() {
//         console.log(txt)
//     }

//     display()
// }

// someFunction()

// // 10 - mais sobre closure
// const multiplicationClosure = (n) => {
//     return (m) => {
//         return n * m
//     }
// }

// const c1 = multiplicationClosure(5)
// const c2 = multiplicationClosure(10)

// console.log(c1)
// console.log(c2)

// console.log(c1(5))
// console.log(c2(10))

// // 11 - recursão
// const untilTen = (n, m) => {
//     if (n < 10) {
//         console.log("A função parou de executar")
//     } else {
//         const x = n - m
//         console.log(x)
//         untilTen(x, m)
//     }
// }

// untilTen(100, 7)

// // // infinite recursion
// // function run(){
// //    console.log("Executanto..")
// //    run();
// // }

// // run()

// function factorial(x) {
//     if (x === 0) {
//         return 1
//     } else {
//         return x * factorial(x - 1)
//     }
// }

// const num = 6

// const result = factorial(num)
// console.log(`O fatorial do número ${num} é ${result}`)

// const informations = (idade, rua = "Marcelo Barbi") => {
//     return `${rua}, ${idade}`
// }

// console.log(informations(12))
// console.log(informations(12, "joão"))

const teste = (nome, idade, rua, numero) => {
    return `${nome}, ${idade}, ${rua}, ${numero}`
}

console.log(teste("Pedro", 17, "João Planincheck", "1574"))


const untilTen = (x, y) => {
    if (x < 10) {
        console.log("A função parou de executar")
    } else {
        const z = z - y
        console.log(z)
        untilTen(z, y)
    }
}

console.log(untilTen(100, 7))


