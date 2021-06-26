let heldValue = null;
let heldOperation = null;
let nextValue = null;

function showValue(location, value) {
  if (value === null) {
    $(location).text("");
  } else {
    $(location).text(Number(value));
  }
}

function updateDisplay() {
  showValue(".held-value", heldValue);

  showValue(".next-value", nextValue);
}

function clearAll() {
  heldValue = null;
  heldOperation = null;
  nextValue = null;
  $(".next-operation").text("");
}

function clearEntry() {
  nextValue = null;
}

function setHeldOperation(operation) {
  if (heldOperation) {
    heldValue = heldOperation(heldValue, nextValue);
  } else if (nextValue !== null && heldOperation === null) {
    heldValue = nextValue;
  }

  nextValue = null;
  heldOperation = operation;
}

function add(x, y) {
  return Number(x) + Number(y);
}

function subtract(x, y) {
  return Number(x) - Number(y);
}

function multiply(x, y) {
  return Number(x) * Number(y);
}

function divide(x, y) {
  return Number(x) / Number(y);
}

function equals() {
  setHeldOperation(null);
  $(".next-operation").text("");
  updateDisplay();
}

$(".digits button").click(function () {
  if (nextValue === null) {
    nextValue = "0";
  }
  nextValue += $(this).text();

  updateDisplay();
});

$(".add").click(function () {
  setHeldOperation(add);
  $(".next-operation").text("+");
  updateDisplay();
});

$(".subtract").click(function () {
  setHeldOperation(subtract);
  $(".next-operation").text("-");
  updateDisplay();
});

$(".multiply").click(function () {
  setHeldOperation(multiply);
  $(".next-operation").text("*");
  updateDisplay();
});

$(".divide").click(function () {
  setHeldOperation(divide);
  $(".next-operation").text("/");
  updateDisplay();
});

$(".equals").click(function () {
  equals();
});

$(".clear-all").click(function () {
  clearAll();
  updateDisplay();
});

$(".clear-entry").click(function () {
  clearEntry();
  updateDisplay();
});
