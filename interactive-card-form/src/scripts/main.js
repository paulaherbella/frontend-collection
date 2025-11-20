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
    .replace(/\D/g, "")        // mantém só números
    .slice(0, 16)              // limita a 16
    .replace(/(.{4})/g, "$1 ") // adiciona espaço a cada 4
    .trim();                   // remove espaço final
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
  mockMonth.textContent = inputMonth.value || "00";
});

inputYear.addEventListener("input", () => {
  mockYear.textContent = inputYear.value || "00";
});

inputCvc.addEventListener("input", () => {
  mockCvc.textContent = inputCvc.value || "000";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  thankYouSection.style.display = "flex";
  form.style.display = "none";
  form.reset();
});

document.querySelector(".continue-button").addEventListener("click", () => {
  thankYouSection.style.display = "none";
  form.style.display = "flex";
});
