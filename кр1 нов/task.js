function solveTask() {
  let xField = document.getElementById("x");
  let aField = document.getElementById("a");
  let bField = document.getElementById("b");
  let result = document.getElementById("result");
  let answer = document.getElementById("answer");
  result.value = "";
  if (!xField.reportValidity() || !aField.reportValidity() || !bField.reportValidity()) {
    answer.innerText = "Заполните все три поля числами.";
    return false;
  }
  let x = Number(xField.value);
  let a = Number(aField.value);
  let b = Number(bField.value);
  if (!Number.isFinite(x) || !Number.isFinite(a) || !Number.isFinite(b)) {
    answer.innerText = "Введите конечные числа.";
    return false;
  }
  if (a > b) {
    answer.innerText = "Ошибка: a должно быть меньше или равно b.";
    return false;
  }
  if (x >= a && x <= b) {
    result.value = "Принадлежит";
  } else {
    result.value = "Не принадлежит";
  }
  answer.innerText = "X = " + x + "; [" + a + ", " + b + "]: " + result.value;
  return true;
}

function clearResult() {
  document.getElementById("result").value = "";
  document.getElementById("answer").innerText = "Данные изменены. Нажмите «Проверить».";
}
