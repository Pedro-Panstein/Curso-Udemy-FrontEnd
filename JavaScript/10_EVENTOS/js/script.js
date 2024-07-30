// 1 - Adicionando eventos
// const botao = document.querySelector("#my-button")

// botao.addEventListener("click", function(){
//     console.log("Clicou aqui")
// })

const botao = document.getElementById('my-button')
botao.addEventListener('click', function() {
    console.log('Clicou aqui')
})
// OS DOIS FUNCIONAM

// 2 - removendo eventos
const secondBtn = document.getElementById('btn')
function imprimirMensagem() {
    console.log('Teste')
}

secondBtn.addEventListener('click', imprimirMensagem)

const thirdBtn = document.getElementById('other-btn')
thirdBtn.addEventListener('click', () => {
    console.log('evento removido')
    secondBtn.removeEventListener('click', imprimirMensagem);
})

// 3 - argumento do evento
const myTitle = document.getElementById('title')
myTitle.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target)
})

// 4 - propagando eventos
const containerBtn = document.getElementById('btn-container')
const btnInsideContainer = document.getElementById('div-btn')

containerBtn.addEventListener('click', () => {
    console.log('Evento 1')
})

btnInsideContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Evento 2')
})

// 5 - removendo evento padrão
// const linkGoogle = document.querySelector("a")

// linkGoogle.addEventListener('click', (e) => {
//     e.preventDefault()

//     console.log('Não alterou a página')
// })

const btnDesativarLink = document.getElementById('teste')
btnDesativarLink.addEventListener('click', () => {
    alert('Link desativado')
    const desativarLink = document.querySelector('a')
    desativarLink.addEventListener('click', (e) => {
        e.preventDefault()
    })
}) //Teste que eu fiz para usar o preventDeault

// 6 - eventos de teclas
document.addEventListener('keyup', (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener('keydown', (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

// 7 - eventos de mouse
const mouseEvent = document.getElementById('mouse')

mouseEvent.addEventListener('mousedown', () => {
    console.log('Pressionou o botão')
})

mouseEvent.addEventListener('mouseup', () => {
    console.log('Soltou o botão')
})

mouseEvent.addEventListener("dblclick", () => {
    console.log("Clique Duplo")
})

// 8 - movimentação do mouse
document.addEventListener('mousemove', (e) => {
    // console.log(`No eixo x: ${e.x}`)
    // console.log(`No eixo y: ${e.y}`)
})

// 9 - eventos de scroll
window.addEventListener('scroll', (e) => {
    if(window.scrollY > 200) {
        console.log('Passamos de 200px')
    }
})

// 10 - focus
const input = document.getElementById('input')
input.style.border = 'solid 2px #000'
input.addEventListener('focus', (e) => {
    input.style.border = 'solid 2px #0d33b3'
    console.log('Entrou no input')
})

input.addEventListener('blur', (e) => {
    input.style.border = 'solid 2px'
    console.log('Saiu do input')
}) //Teste que eu fiz para usar o focus e blur

// 11 - carregamento de página
window.addEventListener('load', () => {
    console.log('A página carregou')
})

window.addEventListener('beforeunload', (e) => {
    e.preventDefault()
    e.returnValue = "Teste"
})

// 12 - debounce
const debounce = (f, delay) => {
    let timeout

    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener('mousemove', debounce(() => {
    console.log("Executanto a cada 4 ms")
}, 400))