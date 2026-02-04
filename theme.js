const btn = document.querySelector(".toggle")
const root = document.documentElement

btn.onclick = () => {
  const mode = root.getAttribute("data-theme")
  root.setAttribute("data-theme", mode === "dark" ? "light" : "dark")
}
