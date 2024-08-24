const button = document.querySelectorAll("#buttons .color");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector(".selected").classList.remove("selected");

    e.currentTarget.classList.add("selected");
  });
});

const themeButton = document.getElementById("theme");
const root = document.documentElement;
const notification = document.querySelector(".notification");
const texto = document.getElementById("texto");
const themeImage = document.getElementById("theme-image");
const menuLanguages = document.getElementById("arrow");
const arrowImg = document.querySelector("#change-arrow img")

themeButton.addEventListener("click", () => {
  // const darkTheme = root.style.getPropertyValue("--fundo-preto") === "#333";
  const darkTheme = getComputedStyle(root).getPropertyValue("--fundo-preto") === "#333";

  if (darkTheme) {
    root.style.setProperty("--fundo-preto", "#f5f5f5");
    root.style.setProperty("--texto-preto", "#333");
    root.style.setProperty("--texto-branco", "#000");
    root.style.setProperty("--fundo-botao", "#d4d4d4");
    themeImage.setAttribute("src", "assets/iconMoon.png");
    console.log("Mudou para branco");
    texto.innerHTML = "Tema alterado para: Claro";
    arrowImg.setAttribute("src", "assets/seta-para-baixo.png")
  } else {
    root.style.setProperty("--fundo-preto", "#333");
    root.style.setProperty("--texto-preto", "#fff");
    root.style.setProperty("--texto-branco", "#fff");
    root.style.setProperty("--fundo-botao", "#525252");
    themeImage.setAttribute("src", "assets/iconSun.png");
    console.log("Mudou para preto");
    texto.innerHTML = "Tema alterado para: Escuro";
    arrowImg.setAttribute("src", "assets/seta-para-baixo-branca.png")
  }

  notification.classList.remove("hidden");

  setTimeout(() => {
    notification.classList.add("hidden");
  }, 2000);
});

const font12 = document.getElementById("12px");
const font14 = document.getElementById("14px");
const font16 = document.getElementById("16px");
const font18 = document.getElementById("18px");
const font20 = document.getElementById("20px");
const img = document.querySelector("img");

font12.addEventListener("click", () => {
  root.style.setProperty("--fonte", "12px");
  img.style.setProperty("height", "22px");
  img.style.setProperty("width", "22px");
});

font14.addEventListener("click", () => {
  root.style.setProperty("--fonte", "14px");
  img.style.setProperty("height", "24px");
  img.style.setProperty("width", "24px");
});

font16.addEventListener("click", () => {
  root.style.setProperty("--fonte", "16px");
  img.style.setProperty("height", "26px");
  img.style.setProperty("width", "26px");
});

font18.addEventListener("click", () => {
  root.style.setProperty("--fonte", "18px");
  img.style.setProperty("height", "28px");
  img.style.setProperty("width", "28px");
});

font20.addEventListener("click", () => {
  root.style.setProperty("--fonte", "20px");
  img.style.setProperty("height", "30px");
  img.style.setProperty("width", "30px");
});

const allFlags = document.querySelector(".all-flags");
const portuguese = document.getElementById("portuguese");
const english = document.getElementById("english");
const spanish = document.getElementById("spanish");
const actualImg = document.getElementById("actualImg");
const buttonTheme = document.querySelector("#theme span")
const buttonSelect = document.querySelectorAll(".color span")
const titleFont = document.querySelector(".font-size h1")

menuLanguages.addEventListener("click", () => {
  allFlags.classList.toggle("hidden");
});

english.addEventListener("click", () => {
  actualImg.setAttribute("src", "assets/eua.png");
  allFlags.classList.add("hidden");
  buttonTheme.innerHTML = "Change theme"
  buttonSelect.forEach(span => {
    span.innerHTML = "Button";
  })
  titleFont.innerHTML = "Change font size"
});

portuguese.addEventListener("click", () => {
  actualImg.setAttribute("src", "assets/brasil.png");
  allFlags.classList.add("hidden");
  buttonTheme.innerHTML = "Mudar tema"
  buttonSelect.forEach(span => {
    span.innerHTML = "Botão";
  })
  titleFont.innerHTML = "Mudar tamanho da fonte"
});

spanish.addEventListener("click", () => {
  actualImg.setAttribute("src", "assets/espanha.png");
  allFlags.classList.add("hidden");
  buttonTheme.innerHTML = "Cambiar tema"
  buttonSelect.forEach(span => {
    span.innerHTML = "Botón";
  })
  titleFont.innerHTML = "Cambiar el tamaño de fuente"
});

//MUDAR BANDEIRA DA ALEMANHA PARA A DA ESPANHA