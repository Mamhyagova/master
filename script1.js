
function onSaveClick() {
  const input = document.getElementById("input");
  const saveButton = document.getElementById("saveBtn");
  const selector = document.getElementById("select");
  const inputValue = input.value;

  if (inputValue.trim() === '') {
    input.classList.add('errorStyle');
    saveButton.classList.add('errorStyle');
  }

  else {
    const inputValue = input.value;
    const selectIndex = selector.selectedIndex;
    const options = selector.options;

    options[selectIndex].label = inputValue;

    input.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
  }
};

function keydownInput(e) {
  const text = e.target.value;
  const saveButton = document.getElementById("saveBtn");
  const input = document.getElementById("input");
  const addButton = document.getElementById("addBtn");

  if (text !== '') {
    input.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
    addButton.classList.remove('errorStyleAddBtn');
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("input").addEventListener("keydown", keydownInput);
  document.getElementById("input").addEventListener("input", onInputChange);
  document.getElementById("saveBtn").addEventListener("click", onSaveClick); //onSaveClick / handleSave
  document.getElementById("addBtn").addEventListener("click", onAddClick); //onAddClick / handleAdd
  document.getElementById("select").addEventListener("change", selectChange); //onChange
});


function onInputChange() {
  const input = document.getElementById("input");
  const saveButton = document.getElementById("saveBtn");
  const addButton = document.getElementById("addBtn");
  const inputValue = input.value;
  if (inputValue.trim() !== "") {
    input.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
    addButton.classList.remove('errorStyleAddBtn');
  }
};

function selectChange() {
  const input = document.getElementById("input");
  const selector = document.getElementById("select");
  const selectIndex = selector.selectedIndex;
  const options = selector.options;
  input.value = options[selectIndex].label;
};

function onAddClick() {
  const saveButton = document.getElementById("saveBtn");
  const input = document.getElementById("input");
  const selector = document.getElementById("select");
  const addButton = document.getElementById("addBtn");
  const opts = document.querySelectorAll('option');
  const inputValue = input.value;

  for (let i = 0; i < opts.length; i++) {
    if (inputValue.trim() === opts[i].label) {
      return alert('You can not create same home name')
    }
  }

  if (inputValue.trim() === '') {
    input.classList.add('errorStyle');
    saveButton.classList.add('errorStyle');
    addButton.classList.add('errorStyleAddBtn');
  } else {
    const newOption = document.createElement("option");
    const newOptionTxt = document.createTextNode(inputValue);
    const savedItems = localStorage.getItem('savedItems');

    newOption.appendChild(newOptionTxt);
    selector.appendChild(newOption);
    selector.selectedIndex = selector.length - 1;

    input.classList.remove('errorStyle');
    saveButton.classList.remove('errorStyle');
    addButton.classList.remove('errorStyleAddBtn');

    if (savedItems) {
      const parsed = JSON.parse(savedItems);

      parsed.push(inputValue);

      localStorage.setItem('savedItems', JSON.stringify(parsed));
    } else {
      const items = [inputValue];

      localStorage.setItem('savedItems', JSON.stringify(items));
    }
  }
};

document.addEventListener("keyup", (e) => {
  if (e.key === 'Enter') {
    insertValue();
  }
});

window.onload = function () {
  const itemsFromLS = localStorage.getItem('savedItems');

  if (itemsFromLS !== null) {
    const parsed = JSON.parse(itemsFromLS);
    const selector = document.getElementById("select");

    for (let i = 0; i < parsed.length; i++) {
      const newOption = document.createElement("option");
      const newOptionVal = document.createTextNode(parsed[i]);

      newOption.appendChild(newOptionVal);
      selector.appendChild(newOption);
    }
  }
}



