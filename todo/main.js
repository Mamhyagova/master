// document.addEventListener("DOMContentLoaded", () => {
document.getElementById("btnAll").addEventListener("click", filterAll);
document.getElementById("btnActive").addEventListener("click", filterActive);
document.getElementById("btnCompleted").addEventListener("click", filterCompleted);
document.getElementById("btnDeleteCompleted").addEventListener("click", onDeleteCompletedClick);
document.getElementById("markAllBtn").addEventListener("click", checkAllCheckboxes);
// });


function onAddEnter() {
    const input = document.getElementById("input");
    const list = document.getElementById("list");
    const inputValue = input.value
    if (inputValue.trim() === "") {
        return false
    } else {
        const li = document.createElement('li');
        const liContainer = document.createElement('div');
        const labelValue = document.createElement('label');
        const checkbox = document.createElement('input');
        const deleteBtn = document.createElement('button');
        const btnAll = document.getElementById("btnAll");
        li.classList.add("listItem");
        labelValue.classList.add("labelValue");
        liContainer.classList.add("liContainer")
        deleteBtn.classList.add("deleteBtn");
        checkbox.classList.add("checkbox");

        const id = +new Date();

        checkbox.id = `checkbox-${id}`;
        labelValue.setAttribute("for", `checkbox-${id}`) ; 

        checkbox.type = "checkbox";
        labelValue.textContent = inputValue;


        liContainer.append(checkbox);
        liContainer.append(labelValue);
        li.append(liContainer);
        li.append(deleteBtn);
        list.append(li);

        deleteBtn.addEventListener("click", onDeleteClick);
        checkbox.addEventListener("change", onCheckboxChange);

        document.getElementById("input").value = '';

        calculateItemsLeft()
        highlightFilterBtns()
        btnAll.classList.add("footerBtnIsActive");
    }
};

document.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        onAddEnter()
    }
});

function onCheckboxChange() {
    const checkBoxes = document.getElementsByClassName('checkbox');
    const labelValue = document.getElementsByClassName('labelValue');
    for (i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            labelValue[i].classList.add("done")
            calculateItemsLeft()
        } else {
            labelValue[i].classList.remove("done")
            calculateItemsLeft()
        }
    }
};

function checkAllCheckboxes() {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    const isAllChecked = Array.from(checkBoxes).every(item => item.checked);
    if (isAllChecked === true) {
        checkBoxes.forEach(item => {
            item.checked = false;
            onCheckboxChange();
            calculateItemsLeft()
        })
    } else {
        checkBoxes.forEach(item => {
            item.checked = true;
            onCheckboxChange();
            calculateItemsLeft()
        })
    }
};

function onDeleteClick(e) {
    const list = document.getElementById("list");
    const listItem = e.target.parentElement;
    list.removeChild(listItem);

    calculateItemsLeft()
};

function calculateItemsLeft() {
    const result = document.getElementById("result");
    const listItems = document.getElementsByClassName("listItem").length;
    const markedDone = document.querySelectorAll("label.done");
    if (markedDone.length = 0) {
        result.textContent = (`${listItems} items left `)
    } else {
        result.textContent = (`${listItems - markedDone.length} items left `)
    }
};

function highlightFilterBtns() {
    const btnAll = document.getElementById("btnAll");
    const activeBtn = document.getElementById("btnActive");
    const btnCompleted = document.getElementById("btnCompleted");

    btnAll.classList.remove("footerBtnIsActive");
    activeBtn.classList.remove("footerBtnIsActive");
    btnCompleted.classList.remove("footerBtnIsActive");
}

function filterAll() {
    const listItem = document.querySelectorAll("ul > li.hidden");

    highlightFilterBtns()
    const btnAll = document.getElementById("btnAll");
    btnAll.classList.add("footerBtnIsActive");

    for (let item of listItem) {
        item.classList.remove("hidden")
    }
};

function filterActive() {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    const listItem = document.querySelectorAll("li");

    highlightFilterBtns()
    const activeBtn = document.getElementById("btnActive");
    activeBtn.classList.add("footerBtnIsActive");

    for (i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked === true) {
            listItem[i].classList.add("hidden")
        } else {
            listItem[i].classList.remove("hidden")
        }
    }
};

function filterCompleted() {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    const listItem = document.querySelectorAll("li");

    highlightFilterBtns()
    const btnCompleted = document.getElementById("btnCompleted");
    btnCompleted.classList.add("footerBtnIsActive");

    for (i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked === true) {
            listItem[i].classList.remove("hidden")
        } else {
            listItem[i].classList.add("hidden")
        }
    }
};


function onDeleteCompletedClick() {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    const listItem = document.querySelectorAll("li");

    for (i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked === true) {
            listItem[i].remove()
            calculateItemsLeft()
        }
    }
};