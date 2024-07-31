const multiplicationForm = document.getElementById('multiplication-form')
const numberInput = document.getElementById('number')
const multiplicationInput = document.getElementById('multiplicator')

const multiplicationTitle = document.querySelector('#multiplication-title span')

const multiplicationTable = document.querySelector("#multiplication-operations")

const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number / i;
        
        const template = `<div class="row">
                <div class="operation">${number} ÷ ${i} = </div>
                <div class="result">${result}</div>
            </div>`

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")
        multiplicationTable.appendChild(row)
    }
    multiplicationTitle.innerHTML = number
}

multiplicationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value
    const multiplicatorNumber = +multiplicationInput.value
    
    if(!multiplicationNumber || !multiplicatorNumber) return

    console.log(multiplicationNumber, multiplicatorNumber)
    createTable(multiplicationNumber, multiplicatorNumber)
})