// // 1
// var x = 10;
// var y = 15;

// if (y > 10) {
//   var x = 5;
//   console.log(x);
// }

// console.log(x);

// let a = 10;
// let b = 15;

// if (b > 10) {
//   let a = 5;
//   console.log(a);
// }

// console.log(a);

// function logName() {
//     const name = "Pedro H"
//     console.log(name)
// }

// const name = "Jennifer"

// logName()

// console.log(name)

// // 2 - arrow Functiom
// const sum = function(a, b){ 
//     return a + b
// }

// const arrowSum = (a, b) => a + b

// console.log(sum(5, 5))
// console.log(arrowSum(5, 5))

// const greeting = (name) => {
//     if(name){
//         return `Hello ${name}`
//     } else {
//         return "Hello usuario sem nome"
//     }
// }

// console.log(greeting())
// console.log(greeting("Pedro"))

// const user = {
//     name: "Jennifer",
//     sayUserName(){
//         setTimeout(function() {
//             console.log(this)
//             console.log(`Username: ${this.name}`)
//         }, 1000)
//     },
//     sayUserNameArrow() {
//         setTimeout(() => {
//             console.log(this)
//             console.log(`Username: ${this.name}`)
//         },1100)
//     }
// }

// user.sayUserName();
// user.sayUserNameArrow();

// 3 - filter
const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter((n) => {
    if (n>= 2){
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: "Pedro Henrique", avaliable: true},
    {name: "Jennifer Mahnke", avaliable: true},
    {name: "Lebron Games", avaliable: false},
    {name: "Joaozinho", avaliable: false},
    {name: "Nicolas pex", avaliable: false},
]

const avaliableUsersr = users.filter((user) => user.avaliable)
console.log(avaliableUsersr)

// 4 - map
const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Chaleira", price: 150, category: "Eletro"},
    {name: "Carro", price: 10000, category: "Automóvel"},
    {name: "Colher", price: 5, category: "Talheres"},
]

products.map((product) => {
    if(product.category === "Roupas"){
        product.onSale = true
    }
})

console.log(products)

// 5 - template literals
const userName = "Matheus"
const age = 31
console.log(`O nome do usuário é ${userName} e ele tem ${age} anos`)

// 6 - destructuring
const fruits = ["Maça", "Mamão", "Laranja"]

const [f1, f2, f3] = fruits
console.log(f1, f3)

const produtcDetail = {
    name: "Mouse",
    price: 39.99,
    category: "Periférico",
    color: "Cinza"
}

const {name: productName, price, category, color} = produtcDetail

console.log(`O nome do produto é ${productName}, ele custa R$${price} e é da cor ${color}`)

// 7 - spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ... a3, 7, 8, 9, 10]
console.log(a4)

const carName = {name: "Gol"}
const carBrand = {brand: "VW"}
const otherInfos = {km: 1000000, price: 49999}

const car = {...carName, ...carBrand, ...otherInfos}

console.log(car)

// 8 - classes
class Product {
    constructor (name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola V", 20)
console.log(shirt)
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(15))  

// 9 - herança
class ProductIwthAttributes extends Product {
    constructor(name, price, colors){
        super(name,price)
        this.colors = colors
    }

    showColor() {
        console.log("As cores são")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

console.log(car)

const hat = new ProductIwthAttributes("Chapéu", 29.99, ["Preto", "Amarelo", "verde"])
console.log(hat)
console.log(hat.name)
hat.showColor()