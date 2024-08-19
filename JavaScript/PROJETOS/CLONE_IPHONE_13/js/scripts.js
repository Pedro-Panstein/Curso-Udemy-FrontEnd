const button = document.querySelectorAll("#image-picker li");
const phoneImage = document.querySelector("#product-image");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);

    button.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    const buttons = e.target;

    const id = buttons.getAttribute("id");
    console.log(id);

    buttons.querySelector(".color").classList.add("selected");
    phoneImage.classList.toggle("changing");
    phoneImage.setAttribute("src", `img/iphone_${id}.jpg`);

    setTimeout(() => {
      phoneImage.classList.toggle("changing");
    }, 200);
  });
});
