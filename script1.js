const saveButton = document.getElementById("btn");
const textInput = document.getElementById("val");
const textSelector = document.getElementById("select");
const addButton = document.getElementById("btnAdd");

function insertValue() {
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

textInput.addEventListener("keydown", (e) => {
  const text = e.target.value;
  console.log(123, text);
  if (text !== '') {
    textInput.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
    addButton.classList.remove('errorStyleAddBtn');
  }
});

function insertVal(event) {
  const txtVal = textInput.value;
  if (txtVal.trim() !== '') {
    textInput.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
    addButton.classList.remove('errorStyleAddBtn');
  }
};

function selectChange() {
  let input = textInput;
  let sel = textSelector.selectedIndex;
  let options = textSelector.options;
  input.value = options[sel].label;
};


function addOption() {
  const txtVal = textInput.value;
  const selectChildren = textSelector.children;
  const inputElements = document.getElementById("val");
  for (i = 0; i < inputElements.length; i++) {
    if (inputElements[i].trim() === selectChildren) {
      alert("You can not create same home name");
    }
  }
  if (txtVal.trim() === '') {
    textInput.classList.add('errorStyle');
    saveButton.classList.add('errorStyle');
    addButton.classList.add('errorStyleAddBtn');
  }

  else {
    textInput.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
    addButton.classList.remove('errorStyleAddBtn');
    let newOption = document.createElement("OPTION"),
      newOptionVal = document.createTextNode(txtVal);
    newOption.appendChild(newOptionVal);
    textSelector.insertBefore(newOption, textSelector.lastChild);
  }
};