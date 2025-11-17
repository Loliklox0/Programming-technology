// ===== Модуль mathUtils =====
const mathUtils = {
    add(a, b) { return a + b; },
    sub(a, b) { return a - b; },
    mul(a, b) { return a * b; },
    div(a, b) { return b === 0 ? "Ошибка: деление на ноль" : a / b; }
  };
  
  // ===== Модуль formatter =====
  const formatter = {
    format(label, value) {
      return typeof value === "number"
        ? `${label}: ${value.toFixed(2)}`
        : `${label}: ${value}`;
    }
  };
  
  // ===== Главный модуль =====
  const inputA = document.getElementById("numA");
  const inputB = document.getElementById("numB");
  const resultBlock = document.getElementById("result");
  
  document.getElementById("btnAdd").onclick = () => calc("add");
  document.getElementById("btnSub").onclick = () => calc("sub");
  document.getElementById("btnMul").onclick = () => calc("mul");
  document.getElementById("btnDiv").onclick = () => calc("div");
  
  function calc(op) {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
  
    if (isNaN(a) || isNaN(b)) {
      resultBlock.textContent = "Введите корректные числа!";
      return;
    }
  
    const result = mathUtils[op](a, b);
    resultBlock.textContent = formatter.format("Результат", result);
  }
  