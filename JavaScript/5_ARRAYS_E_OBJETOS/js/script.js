// 1 - arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista)
console.log(typeof lista)

const item = ["Pedro", true, 2, 4.12]

console.log(item)

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d"]
console.log(arr[3])

// 3 - propriedades
const numbers = [5, 3, 1]
console.log(numbers.length)
console.log(numbers["length"])

const myName = "Pedro"

console.log(myName.length)

// 4 - métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers)

const text = "algum texto"

console.log(text.toUpperCase())
console.log(typeof text.toUpperCase)
console.log(text.indexOf("t"))

// 5 - objetos
const person = {
    name: "Pedro",
    age: 31,
    job: "Programador"
}

console.log(person)

console.log(person.name)
console.log(person.name.length)

console.log(typeof person)

// 6 - criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000
}

console.log(car)
car.doors = 4
console.log(car)

delete car.km
console.log(car)

const wall = {
    color: "Blue",
    material: "Gesso",
    heigth: "3 metros",
    width: "5 metros"
}

console.log(wall.color.indexOf("e"))
wall.model = "Jupinboca"
console.log(wall)
delete wall.model,
    delete wall.color,
    delete wall.material,
    console.log(wall)

// 7 - mais sobre objetos
const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)

console.log(obj2)

console.log(obj)

// 8 - conhecendo melhor o objeto
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))

// 9 - Mutação
const a = {
    name: "Pedro"
}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age = 31

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)

// 10 - loops em arrays
const users = ["Pedro", "João", "Miguel", "Mateus"]

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`)
}

// 11 - push e pop
const array = ["a", "b", "c", "d"]
console.log(array)
console.log(array.length)
array.push("e")

console.log(array)
console.log(array.length);

array.pop()

console.log(array)

const itemRemovido = array.pop()
console.log(itemRemovido)
console.log(array)

array.push("z", "y", "x")
console.log(array)

// 12 - shift e unshift
const letters = ["a", "b", "c",]

const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift("p", "q", "j")
letters.unshift("l")
console.log(letters)

// 13 - indexof e lastindexof
const teste = ["Abelha", "Baleia", "Cachorro"]

console.log(teste.indexOf("Baleia"))
console.log(teste.IndexOf("Cachorro"))

console.log(teste[2])
console.log(teste[teste.IndexOf("Baleia")])

console.log(teste.lastIndexOf("Cachorro"))


// 14 - slice
const teste2 = ["a", "b", "c", "d", "e", "f"]

const subArray = teste2.slice(2, 4)

console.log(teste2)
console.log(subArray)

const subArray2 = teste2.slice(2, 4 + 1)

console.log(subArray2)

const subArray3 = teste2.slice(10, 20)
console.log(subArray3)

const subArray4 = teste2.slice(2)
console.log(subArray4)

// 15 - forEach
const nums = [1, 2, 3, 4, 5]

nums.forEach((n) => {
    console.log(`O numero é ${n}`)
})

const posts = [
    { title: "Primeiro post", category: "PHP" },
    { title: "Segundo post", category: "JavaScript" },
    { title: "Terceiro post", category: "Python" }
]

posts.forEach((post) => {
    console.log(`O post é ${post.title}, da categoria ${post.category}`)
})

// 16 - Includes
const brands = ["BM", "VW", "Fiat"]

console.log(brands.includes("Fiat"))
console.log(brands.includes("Kia"))

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW!")
}

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse()
console.log(reverseTest)

// 18 - trim
const trimTest = "   testando \n  "
console.log(trimTest)
console.log(trimTest.trim())

console.log(trimTest.length)
console.log(trimTest.trim().length)

// 19 - padStart e padEnd 
const testePadStart = "1"

const numNumber = testePadStart.padStart(4, "0")
console.log(numNumber)
console.log(testePadStart)

const testepadEnd = numNumber.padEnd(10, "0")
console.log(testepadEnd)

// 20 - split
const frase = "O rato roeu a roupa do rei de Roma"

const arrayDaFrase = frase.split(" ")

console.log(arrayDaFrase)

// 21 - join
const fraseDenovo = arrayDaFrase.join(" ")
console.log(fraseDenovo)

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`
console.log(fraseDeCompra)

// 22 - repeat
const testeRepeat = "Testando "
console.log(testeRepeat.repeat(5))

// 23 - rest operator  IMPORTANTE
const someInfinita = (...args) => {
    let total = 0
    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total
}

console.log(someInfinita(1, 2, 3)) 
console.log(someInfinita(1, 2, 124, 12, 553643, 754, 754, 13425, 64325))

// 24 - for...of  IMPORTANTE
const somaInfinita2 = (...args) => {
    let total = 0
    for (num of args) {
        total += num
    }
    return total
}

console.log(somaInfinita2(1, 2, 3))
console.log(somaInfinita2(1, 2, 124, 12, 553643, 754, 754, 13425, 64325))

// 25 - destructuring em objetos
const userDetails = {
    firtName: "Pedro",
    lastName: "Panstein",
    job: "Programador"
}

const { firtName, lastName, job } = userDetails

console.log(firtName, lastName, job)

// renomear variáveis
const { firtName: primeiroNome, lastName: ultimoNome } = userDetails

console.log(primeiroNome)
console.log(ultimoNome)

// 26 - destructuring com arrays
const myList = ["Avião", "Submarino", "Carro", "Trator"]

const [veiculoA, veiculoB, veiculoC] = myList
console.log(veiculoA, veiculoB, veiculoC)

// 27 - JSON
const myJson = '{"name": "Pedro", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}'
console.log(myJson)
console.log(typeof myJson)

// 28 - JSon para objeto e objeto para JSon
// Converte o JSON
const myObject = JSON.parse(myJson)
console.log(myObject)
console.log(myObject.name)
console.log(typeof myObject)

// Json inválido
const badJson = `{"name": Pedro, "age": 17}`
// const myBadJson = JSON.parse(badJson)

myObject.isOpenToWork = true
console.log(myObject)

// Volta pra JSON
const myNemJson = JSON.stringify(myObject)
console.log(myNemJson)
console.log(typeof myNemJson)