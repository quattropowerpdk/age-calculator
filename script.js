const button = document.querySelector(".img_container");

const inputYear = document.getElementById("year");
const inputMonth = document.getElementById("month");
const inputDay = document.getElementById("day");

const labelYear = document.querySelector(".label_p_year");
const labelMonth = document.querySelector(".label_p_month");
const labelDay = document.querySelector(".label_p_day");

const errorEmptyYear = document.querySelector(".label_error_empty_year");
const errorEmptyMonth = document.querySelector(".label_error_empty_month");
const errorEmptyDay = document.querySelector(".label_error_empty_day");

const errorNonValidYear = document.querySelector(
  ".label_error_empty_valid_year"
);
const errorNonValidMonth = document.querySelector(
  ".label_error_empty_valid_month"
);
const errorNonValidDay = document.querySelector(".label_error_empty_valid_day");

const spanYears = document.querySelector(".span_years");
const spanMonths = document.querySelector(".span_months");
const spanDays = document.querySelector(".span_days");

button.addEventListener("click", function (e) {
  e.preventDefault();

  let d1 = inputDay.value;
  let m1 = inputMonth.value;
  let y1 = inputYear.value;

  let date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();

  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  //  YEARS
  if (inputYear.value > y2) {
    labelYear.style.color = "red";
    errorNonValidYear.classList.remove("hidden");
  } else {
    errorNonValidYear.classList.add("hidden");
    labelYear.style.color = "hsl(0, 1%, 44%)";
  }

  if (inputYear.value.length === 0) {
    errorEmptyYear.classList.remove("hidden");
    labelYear.style.color = "red";
  } else {
    errorEmptyYear.classList.add("hidden");
  }

  // MONTH
  if (inputMonth.value > 12) {
    labelMonth.style.color = "red";
    errorNonValidMonth.classList.remove("hidden");
  } else {
    errorNonValidMonth.classList.add("hidden");
    labelMonth.style.color = "hsl(0, 1%, 44%)";
  }

  if (inputMonth.value.length === 0) {
    errorEmptyMonth.classList.remove("hidden");
    labelMonth.style.color = "red";
  } else {
    errorEmptyMonth.classList.add("hidden");
  }

  // DAY

  if (inputDay.value > 31) {
    labelDay.style.color = "red";
    errorNonValidDay.classList.remove("hidden");
  } else {
    errorNonValidDay.classList.add("hidden");
    labelDay.style.color = "hsl(0, 1%, 44%)";
  }

  if (inputDay.value.length === 0) {
    errorEmptyDay.classList.remove("hidden");
    labelDay.style.color = "red";
  } else {
    errorEmptyDay.classList.add("hidden");
  }

  if (
    inputYear.value <= y2 &&
    inputYear.value > 0 &&
    inputMonth.value > 0 &&
    inputMonth.value < 13 &&
    inputDay.value > 0 &&
    inputDay.value < 31
  ) {
    spanYears.textContent = y;
    spanMonths.textContent = m;
    spanDays.textContent = d;
  }
});
