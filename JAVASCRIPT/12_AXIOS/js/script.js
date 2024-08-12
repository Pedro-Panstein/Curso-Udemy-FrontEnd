// 1 - instalação
console.log(axios)

// 2 - primeiro request
const getData = async() => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users", 
        // 4 - definindo headers
        {
            Headers: {
                "Content-Type": "application/json",
                custom: "header",
            } 
        })
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

getData()

// 3 - imprimindo dados na tela
const container = document.querySelector("#user-container")

const printData = async() => {
    const data = await getData()
    console.log(data)

    data.forEach( (user) => {
        const div = document.createElement("div")
        const nameElement = document.createElement("h2")
        nameElement.textContent = user.name
        div.appendChild(nameElement)
        const emailUser = document.createElement("p")
        emailUser.textContent = user.email
        div.appendChild(emailUser)
        container.appendChild(div)
    })
}

printData()

// 5 - post
const form = document.querySelector("#post-form")
const titleInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    axios.post("https://jsonplaceholder.typicode.com/posts")
})