const inputName = document.getElementById("card-name-input");
const inputNumber = document.getElementById("card-number-input");
const inputMonth = document.getElementById("date-month-input");
const inputYear = document.getElementById("date-year-input");
const inputCvc = document.getElementById("cvc-input");

const mockNumber = document.getElementById("mock-card-number");
const mockName = document.getElementById("mock-card-name");
const mockMonth = document.getElementById("mock-month");
const mockYear = document.getElementById("mock-year");
const mockCvc = document.getElementById("mock-cvc");

const interactiveCardsSection = document.querySelector(".interactive-cards");
const form = document.querySelector(".form-client-card");
const thankYouSection = document.querySelector(".thank-you-section");

function formatCardNumber(value) {
  return value
    .replace(/\D/g, "") // mantém só números
    .slice(0, 16) // limita a 16
    .replace(/(.{4})/g, "$1 ") // adiciona espaço a cada 4
    .trim(); // remove espaço final
}

inputNumber.addEventListener("input", () => {
  const formatted = formatCardNumber(inputNumber.value);

  inputNumber.value = formatted;
  mockNumber.textContent = formatted || "0000 0000 0000 0000";
});

inputName.addEventListener("input", () => {
  mockName.textContent = inputName.value || "JANE APPLESEED";
});

inputMonth.addEventListener("input", () => {
  let month = inputMonth.value.replace(/\D/g, "").slice(0, 2);

  if (month > 12) month = "12";
  inputMonth.value = month;

  mockMonth.textContent = month || "00";
});

inputYear.addEventListener("input", () => {
  let year = inputYear.value.replace(/\D/g, "").slice(0, 2);
  inputYear.value = year;
  mockYear.textContent = inputYear.value || "00";
});

inputCvc.addEventListener("input", () => {
  let cvc = inputCvc.value.replace(/\D/g, "").slice(0, 3);
  inputCvc.value = cvc;
  mockCvc.textContent = inputCvc.value || "000";
});

function showError(input) {
  input.style.borderColor = "hsl(0, 100%, 66%)"; 
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  // limpa erros anteriores
  document.querySelectorAll("input").forEach((i) => (i.style.borderColor = ""));

  // validações
  if (!inputName.value.trim()) {
    showError(inputName, "Can't be blank");
    isValid = false;
  }

  const digits = inputNumber.value.replace(/\s/g, "");
  if (digits.length !== 16) {
    showError(inputNumber, "Invalid card number");
    isValid = false;
  }

  const month = Number(inputMonth.value);
  if (month < 1 || month > 12) {
    showError(inputMonth, "Invalid month");
    isValid = false;
  }

  const year = Number(inputYear.value);

  if (inputYear.value.length !== 2 || year < 25) {
    showError(inputYear, "Invalid year");
    isValid = false;
  }

  if (inputCvc.value.length !== 3) {
    showError(inputCvc, "Invalid CVC");
    isValid = false;
  }

  if (!isValid) return; // não avança se tiver erro

  // se tudo ok vai para o thank you
  thankYouSection.style.display = "flex";
  form.style.display = "none";
});

function resetMocks() {
  mockName.textContent = "JANE APPLESEED";
  mockNumber.textContent = "0000 0000 0000 0000";
  mockMonth.textContent = "00";
  mockYear.textContent = "00";
  mockCvc.textContent = "000";
}


document.querySelector(".continue-button").addEventListener("click", () => {
  thankYouSection.style.display = "none";
  form.style.display = "flex";

  form.reset();
  resetMocks();
});
