// 1 - movendo-2 pelo DOM
console.log(document.body)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li")
console.log(listItens)

// 3 - selecionar por id
const title = document.getElementById("title")
console.log(title)

// 4 - selecionar por classe
const products = document.getElementsByClassName("product")
console.log(products)

// 5 - selecionando elementos por css
const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

// 6 - insertBefore
const p = document.createElement("p")

const header = title.parentElement

header.insertBefore(p, title)

// 7 - appendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// 8 - replaceChild
const h2 = document.querySelector("h2")

h2.textContent = "Meu novo título"

header.replaceChild(h2, title)

// 9 - createTextNode
const myText = document.createTextNode("Agora vamos colocar mais um título")
console.log(myText)

const h3 = document.createElement("h3")

h3.appendChild(myText)
console.log(h3)

mainContainer.append(h3)

// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector("a")

console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com")
console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target", "_blank")

// 11 - altura e largura
const footer = document.querySelector("footer")

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientWidth)
console.log(footer.clientHeight)

// 12 - posição do elemento