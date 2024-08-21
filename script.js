const themeButton = document.getElementById("theme");

themeButton.addEventListener("click", () => {
  const variavel = document.documentElement;
  const darkTheme = getComputedStyle(variavel).getPropertyValue("--fundo") === "#333";

  if (darkTheme) {
    variavel.style.setProperty("--fundo", "#fafafa");
    variavel.style.setProperty("--texto", "#000")
    themeButton.innerHTML = "Claro";
    console.log("Mudou para branco");
  } else {
    variavel.style.setProperty("--fundo", "#333")
    variavel.style.setProperty("--texto", "#fff")
    themeButton.innerHTML = "Escuro";
    console.log("Mudou para preto");
  }
});