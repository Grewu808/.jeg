const root = document.documentElement
const button = document.querySelector(".toggle")

const savedTheme = localStorage.getItem("theme")
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme)
} else {
  root.setAttribute("data-theme", "dark")
  localStorage.setItem("theme", "dark")
}

button.addEventListener("click", () => {
  const current = root.getAttribute("data-theme")
  const next = current === "dark" ? "light" : "dark"
  root.setAttribute("data-theme", next)
  localStorage.setItem("theme", next)
})
