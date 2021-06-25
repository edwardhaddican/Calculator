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
}

function clearEntry() {
  nextValue = null;
}

$(".digits button").click(function () {
  if (nextValue === null) {
    nextValue = "0";
  }
  nextValue += $(this).text();
  console.log(nextValue);

  updateDisplay();
});

$(".add").click(function () {
  console.log("add");
});

$(".subtract").click(function () {
  console.log("subtract");
});

$(".multiply").click(function () {
  console.log("mult");
});

$(".divide").click(function () {
  console.log("divide");
});

$(".equals").click(function () {
  console.log(" equals");
});

$(".clear-all").click(function () {
  clearAll();
  updateDisplay();
});

$(".clear-entry").click(function () {
  clearEntry();
  updateDisplay();
});
