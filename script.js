const saveButton = document.getElementById("btn");
const textInput = document.getElementById("val");
const textSelector = document.getElementById("select");

document.getElementById("btn").onclick = function insertValue() {
  const txtVal = textInput.value;
  if (txtVal.trim() === '') {
    textInput.classList.add('errorStyle');
    saveButton.classList.add('errorStyle');
  }
  else {
    const txtVal = textInput.value;
    let sel = textSelector.selectedIndex;
    let options = textSelector.options;
    options[sel].label = txtVal;

    textInput.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
  }
};

textInput.addEventListener("keydown", ({ target: { value: text } }) => {
  console.log("ASDASD");
  if (text !== '') {
    textInput.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
  }
})

val.onchange = function insertVal(event) {
  console.log("SDFSDF", event.target.value)
  const txtVal = textInput.value;
  if (txtVal.trim() !== '') {
    textInput.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
  }
};

select.onchange = function selectChange() {

  let input = textInput;
  let sel = textSelector.selectedIndex;
  let options = textSelector.options;
  input.value = options[sel].label;
}






