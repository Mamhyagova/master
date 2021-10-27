
function saveBtnValue() {
  const textInput = document.getElementById("inputValue");
  const saveButton = document.getElementById("saveBtn");
  const Selector = document.getElementById("select");
  const textInputValue = textInput.value;
  if (textInputValue.trim() === '') {
    textInput.classList.add('errorStyle');
    saveButton.classList.add('errorStyle');
  }
  else {
    const textInputValue = textInput.value;
    const sel = Selector.selectedIndex;
    const options = Selector.options;
    options[sel].label = txtVal;
    textInput.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
  }
};

function insertInput (e) {
  const text = e.target.value;
  const saveButton = document.getElementById("saveBtn");
  const textInput = document.getElementById("inputValue");
  const addButton = document.getElementById("addBtn");
  if (text !== '') {
    textInput.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
    addButton.classList.remove('errorStyleAddBtn');
  }
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputValue").addEventListener("keydown", insertInput );
  document.getElementById("inputValue").addEventListener("onclick", insertInput );

});


function inputInsertValue() {
  const textInputValue = textInput.value;
  const saveButton = document.getElementById("saveBtn");
  const textInput = document.getElementById("inputValue");
  const addButton = document.getElementById("addBtn");
  if (textInputValue.trim() !== '') {
    textInput.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
    addButton.classList.remove('errorStyleAddBtn');
  }
};

  


function selectChange() {
  const textInput = document.getElementById("inputValue");
  const Selector = document.getElementById("select");
  const sel = Selector.selectedIndex;
  const options = Selector.options;
  textInput.value = options[sel].label;
};

function addOptionBtn() {
  const saveButton = document.getElementById("saveBtn");
  const textInput = document.getElementById("inputValue");
  const Selector = document.getElementById("select");
  const addButton = document.getElementById("addBtn");
  const textInputValue = textInput.value;
  const opts = document.querySelectorAll('option');
  for (let i = 0; i < opts.length; i++) {
    if (textInputValue.trim() === opts[i].label) {
      return alert('You can not create same home name')
    }
  }
  if (textInputValue.trim() === '') {
    textInput.classList.add('errorStyle');
    saveButton.classList.add('errorStyle');
    addButton.classList.add('errorStyleAddBtn');
  }
  else {
    const newOption = document.createElement("OPTION");
    const newOptionVal = document.createTextNode(txtVal);
    newOption.appendChild(newOptionVal);
    Selector.insertBefore(newOption, Selector.lastChild);
    const lastItem = Selector[Selector.length - 1];
    Selector.selectedIndex = Selector.length - 1;
    textInput.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
    addButton.classList.remove('errorStyleAddBtn');
  }
};

document.addEventListener("keyup", (e) => {
  if (e.key === 'Enter') {
    insertValue();
  }
}
)

