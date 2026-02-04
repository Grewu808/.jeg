function addToCart(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  cart.push(name)
  localStorage.setItem("cart", JSON.stringify(cart))
  alert(name + " adaugat in cos")
}
