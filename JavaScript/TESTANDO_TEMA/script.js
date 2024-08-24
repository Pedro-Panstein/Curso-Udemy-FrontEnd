const button = document.querySelectorAll("#buttons .color");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector(".selected").classList.remove("selected");

    e.currentTarget.classList.add("selected");
  });
});

const themeButton = document.getElementById("theme");
const root = document.documentElement;

themeButton.addEventListener("click", () => {
  // const darkTheme = root.style.getPropertyValue("--fundo-preto") === "#333";
  const darkTheme =
    getComputedStyle(root).getPropertyValue("--fundo-preto") === "#333";
  const iconSun = `<img src="assets/iconSun.png">`;
  const iconMoon = `<img src="assets/iconMoon.png">`;
  const notification = document.querySelector(".notification");
  const texto = document.getElementById("texto");

  if (darkTheme) {
    root.style.setProperty("--fundo-preto", "#f5f5f5");
    root.style.setProperty("--texto-preto", "#333");
    root.style.setProperty("--texto-branco", "#000");
    root.style.setProperty("--fundo-botao", "#d4d4d4");
    themeButton.innerHTML = `Mudar tema ${iconMoon}`;
    console.log("Mudou para branco");
    texto.innerHTML = "Tema alterado para: Claro";
  } else {
    root.style.setProperty("--fundo-preto", "#333");
    root.style.setProperty("--texto-preto", "#fff");
    root.style.setProperty("--texto-branco", "#fff");
    root.style.setProperty("--fundo-botao", "#525252");
    themeButton.innerHTML = `Mudar tema ${iconSun}`;
    console.log("Mudou para preto");
    texto.innerHTML = "Tema alterado para: Escuro";
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
  img.style.setProperty("height", "22px")
  img.style.setProperty("width", "22px")
});

font14.addEventListener("click", () => {
  root.style.setProperty("--fonte", "14px");
  img.style.setProperty("height", "24px")
  img.style.setProperty("width", "24px")
});

font16.addEventListener("click", () => {
  root.style.setProperty("--fonte", "16px");
  img.style.setProperty("height", "26px")
  img.style.setProperty("width", "26px")
});

font18.addEventListener("click", () => {
  root.style.setProperty("--fonte", "18px");
  img.style.setProperty("height", "28px")
  img.style.setProperty("width", "28px")
});

font20.addEventListener("click", () => {
  root.style.setProperty("--fonte", "20px");
  img.style.setProperty("height", "30px")
  img.style.setProperty("width", "30px")
});

const menuLanguages = document.getElementById("arrow")
const allFlags = document.querySelector(".all-flags")
const portuguese = document.getElementById("portuguese");
const english = document.getElementById("english");
const germany = document.getElementById("germany");
const actualImg = document.getElementById("actualImg")

menuLanguages.addEventListener("click", () => {
  allFlags.classList.toggle("hidden")
})

english.addEventListener("click", () => {
  actualImg.setAttribute("src", "assets/eua.png")
})