//No drag and drop existem alguns eventos essenciais
/*
 - dragstart
 - drag
 - dragend -> precisa do preventDefault() para permitir o drop
 - dragenter -> precisa do preventDefault() para permitir o drop
 - dragover
 - dragleave
 - drop
*/

const block = document.querySelectorAll(".block");

block.forEach((event) => {
    event.addEventListener("dragstart", (e) => {
        console.log(event)
    })
});