const inputEL = window.document.querySelector("[chak-input]");
const buttonEl = window.document.querySelector("[chak-btn]");
const chipEl = window.document.querySelector("[chak-chip]");

inputEL.addEventListener("keypress", (e) => {
  if (e.keycode === 13) {
    console.log(inputEL.value);
  }
});

buttonEl.addEventListener("click", () => {
  console.log(inputEL.value);
});
