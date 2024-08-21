const button = document.querySelectorAll("#buttons .color");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector(".selected").classList.remove("selected");

    e.currentTarget.classList.add("selected");
  });
});

const themeButton = document.getElementById("theme");

themeButton.addEventListener("click", () => {
  const root = document.documentElement;
  // const darkTheme = root.style.getPropertyValue("--fundo-preto") === "#333";
  const darkTheme = getComputedStyle(root).getPropertyValue("--fundo-preto") === "#333";

  if (darkTheme === true) {
    root.style.setProperty("--fundo-preto", "#fafaa");
    root.style.setProperty("--texto-preto", "#333");
    root.style.setProperty("--texto-branco", "#000");
    console.log("Mudou para branco");
  } else {
    root.style.setProperty("--fundo-preto", "#333");
    root.style.setProperty("--texto-preto", "#fff");
    root.style.setProperty("--texto-branco", "#fff");
    console.log("Mudou para preto");
  }
});
