btn.onclick = function insertValue() {
  const txtVal = document.getElementById('val').value;
  if (txtVal.trim() === '') {
    document.getElementById('val').classList.add('errorStyle');
    document.querySelector('button').classList.add('errorStyle');
  }
  else {
    const txtVal = document.getElementById('val').value;
    let sel = document.getElementById('select').selectedIndex;
    let options = document.getElementById('select').options;
    options[sel].label = txtVal;
  }
};

val.onchange = function insertVal() {
  const txtVal = document.getElementById('val').value;
  if (txtVal.trim() !== '') {
    document.getElementById('val').classList.remove('errorStyle');
    document.getElementById('btn').classList.remove('errorStyle');
  }
};

select.onchange = function selectChange() {
  let input = document.getElementById('val');
  let sel = document.getElementById('select').selectedIndex;
  let options = document.getElementById('select').options;
  input.value = options[sel].label;
}






