document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnAll").addEventListener("click", onAllClick);
    document.getElementById("btnActive").addEventListener("click", onActiveClick);
    document.getElementById("btnCompleted").addEventListener("click", onCompletedClick);
    document.getElementById("btnDeleteCompleted").addEventListener("click", onDeleteCompletedClick);
    document.getElementById("markAllBtn").addEventListener("click", onMarkAllClick);
});

function onAddEnter() {
    const input = document.getElementById("input");
    const list = document.getElementById("list");
    const markAllBtn = document.getElementById("markAllBtn");
    const btnsContainer = document.getElementById("btns-container")
    const inputValue = input.value

    const li = document.createElement('li');
    const liContainer = document.createElement('div');
    const labelValue = document.createElement('label');
    const inputCheck = document.createElement('input');
    const deleteBtn = document.createElement('button');

    if (inputValue.trim() === "") {
        return false
    } else {
        
        liContainer.id = "liContainer";
        li.id = "listItem";
        labelValue.id = "labelValue"
        inputCheck.id = "inputCheck";
        
        inputCheck.type = "checkbox";
        
        labelValue.textContent = inputValue;
        
        liContainer.append(inputCheck);
        liContainer.append(labelValue);
        li.append(liContainer);
        li.append(deleteBtn);
        list.append(li);
        
        
        liContainer.classList.add("liContainer")
        deleteBtn.classList.add("deleteBtn");
        inputCheck.classList.add("inputCheck");
        
        deleteBtn.addEventListener("click", onDeleteClick);
        inputCheck.addEventListener("change", onCheckboxChange);
        
        let result= document.getElementById("result");
        let listItems = document.querySelectorAll("#listItem").length
        result.textContent = (`${listItems} items left `)
    }
};

document.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        onAddEnter()
        document.getElementById("input").value = '';
    }
});

function onCheckboxChange(e) {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    const labelValue = document.querySelectorAll('#labelValue');
    for (i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked === true) {
            labelValue[i].classList.add("done")
        } else {
            labelValue[i].classList.remove("done")
        }
    }
};

function onMarkAllClick() {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    const isAllChecked = Array.from(checkBoxes).every(item => item.checked)

    if (isAllChecked === false) {
        checkBoxes.forEach(item => {
            item.checked = true;
            onCheckboxChange();
        })
    } else {
        checkBoxes.forEach(item => {
            item.checked = false;
            onCheckboxChange();
        })
    }
};

function onDeleteClick(e) {
    const list = document.getElementById("list");
    const listItem = e.target.parentElement;
    list.removeChild(listItem);
    let result= document.getElementById("result");
    let listItems = document.querySelectorAll("#listItem").length
    result.textContent = (`${listItems} items left `)
};

function onAllClick() {
    const listItem = document.querySelectorAll("ul > li.hidden");

    const btnAll = document.getElementById ("btnAll");
    const activeBtn = document.getElementById ("btnActive");
    const btnCompleted = document.getElementById ("btnCompleted");

    activeBtn.classList.remove("footerBtnActive");
    btnCompleted.classList.remove("footerBtnActive");

    btnAll.classList.add("footerBtnActive");

    for (let item of listItem) {
        item.classList.remove("hidden")
    }
};

function onActiveClick() {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    const listItem = document.querySelectorAll("li");

    const activeBtn = document.getElementById ("btnActive");
    const btnAll = document.getElementById ("btnAll");
    const btnCompleted = document.getElementById ("btnCompleted");

    btnAll.classList.remove("footerBtnActive");
    btnCompleted.classList.remove("footerBtnActive");

    activeBtn.classList.add("footerBtnActive");
    for (i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked === true) {
            listItem[i].classList.add("hidden")
        } else {
            listItem[i].classList.remove("hidden")
        }
    }
};

function onCompletedClick() {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    const listItem = document.querySelectorAll("li");

    const activeBtn = document.getElementById ("btnActive");
    const btnAll = document.getElementById ("btnAll");
    const btnCompleted = document.getElementById ("btnCompleted");

    btnAll.classList.remove("footerBtnActive");
    activeBtn.classList.remove("footerBtnActive");

    btnCompleted.classList.add("footerBtnActive");

    for (i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked === false) {
            listItem[i].classList.add("hidden")
        } else {
            listItem[i].classList.remove("hidden")
        }
    }
};


function onDeleteCompletedClick() {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    const listItem = document.querySelectorAll("li");
    

    for (i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked === true) {
            listItem[i].remove()
            let result= document.getElementById("result");
            let listItems = document.querySelectorAll("#listItem").length
            result.textContent = (`${listItems} items left `)
        }
    }
};