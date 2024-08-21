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
  const iconSun = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z"/></svg>`
  const iconMoon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`

  if (darkTheme) {
    root.style.setProperty("--fundo-preto", "#fafaa");
    root.style.setProperty("--texto-preto", "#333");
    root.style.setProperty("--texto-branco", "#000");
    root.style.setProperty("--fundo-botao", "#d4d4d4")
    themeButton.innerHTML = `Mudar tema ${iconMoon}`
    console.log("Mudou para branco");
    
  } else {
    root.style.setProperty("--fundo-preto", "#333");
    root.style.setProperty("--texto-preto", "#fff");
    root.style.setProperty("--texto-branco", "#fff");
    root.style.setProperty("--fundo-botao", "#525252")
    themeButton.innerHTML = `Mudar tema ${iconSun}`
    console.log("Mudou para preto");
  }
});
