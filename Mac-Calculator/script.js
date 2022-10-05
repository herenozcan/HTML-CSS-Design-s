let resultElement = document.querySelector(".js-result");
let standartButtons = document.querySelectorAll(".js-btn-standarts");
let buttonResult = document.querySelector(".js-btn-equal");
let buttonAC = document.querySelector(".js-btn-ac");
let buttonMoreLess = document.querySelector(".js-btn-more-less");
let buttonDEL = document.querySelector(".js-btn-del");

function addElementToInputResult(numberDigitated) {
  checkSymbolDuplicate(numberDigitated);
  if (checkInitialSymbol(numberDigitated)) return;
  resultElement.value += numberDigitated;
}

function performCalculation() {
  try {
    resultElement.value = eval(resultElement.value);
  } catch {
    alert("Something went wrong. Try again.");
  }
}

function cleanResult() {
  resultElement.value = "";
}

function changeAccountSignal() {
  if (Number(resultElement.value)) {
    resultElement.value = resultElement.value * -1;
  }
}

function deleteLastLetterDoResult() {
  resultElement.value = resultElement.value.slice(0, -1);
}

function checkSymbolDuplicate(numberDigitatedReceivedPerParameter) {
  let lastValueNoInputResult =
    resultElement.value[resultElement.value.length - 1];
  if (
    lastValueNoInputResult &&
    !Number(lastValueNoInputResult) &&
    !Number(numberDigitatedReceivedPerParameter) &&
    lastValueNoInputResult != 0 &&
    numberDigitatedReceivedPerParameter != 0
  ) {
    deleteLastLetterDoResult();
  }
}

function checkInitialSymbol(numberDigitatedReceivedPerParameter) {
  if (
    resultElement.value.length == 0 &&
    !Number(numberDigitatedReceivedPerParameter)
  ) {
    return true;
  }
}

function manageListeners() {
  standartButtons.forEach((currentElement) => {
    currentElement.addEventListener("click", () => {
      let valueOfElementClicked = currentElement.dataset.value;
      addElementToInputResult(valueOfElementClicked);
    });
  });

  buttonResult.addEventListener("click", () => {
    performCalculation();
  });

  buttonAC.addEventListener("click", () => {
    cleanResult();
  });

  buttonMoreLess.addEventListener("click", () => {
    changeAccountSignal();
  });

  buttonDEL.addEventListener("click", () => {
    deleteLastLetterDoResult();
  });
}

manageListeners();