function chooseCoffee(variety) {
  document.getElementById("coffee-variety").value = variety;
  document.getElementById("cart-status").innerText = "Выбран сорт: " + variety;
}

function resetCoffee() {
  document.getElementById("cart-status").innerText = "Выберите сорт в таблице или укажите его здесь.";
}
