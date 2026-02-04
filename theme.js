const button = document.querySelector(".toggle")
const root = document.documentElement

button.onclick = () => {
  const mode = root.getAttribute("data-theme")
  root.setAttribute("data-theme", mode === "dark" ? "light" : "dark")
}
