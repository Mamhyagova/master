document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addBtn").addEventListener("click", onAddClick);
    document.getElementById("btnAll").addEventListener("click", onAllClick);
    document.getElementById("btnActive").addEventListener("click", onActiveClick);
    document.getElementById("btnCompleted").addEventListener("click", onCompletedClick);
    document.getElementById("btnDeleteCompleted").addEventListener("click", onDeleteCompletedClick);


});

function onAddClick() {
    const input = document.getElementById("input");
    const list = document.getElementById("list");
    const inputValue = input.value
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    if (inputValue.trim() === "") {
        return false
    } else {
        li.textContent = inputValue;
        deleteBtn.textContent = "delete";
        li.append(deleteBtn);
        list.appendChild(li);
        deleteBtn.addEventListener("click", onDeleteClick)
        li.addEventListener("click", onItemClick)
    }
};


function onItemClick(e) {
    e.target.classList.toggle("done");
    console.log(e)
};

function onDeleteClick(e) {
    const list = document.getElementById("list");
    const listItem = e.target.parentElement;
    list.removeChild(listItem);

};

function onAllClick() {
    const listItem = document.querySelectorAll("ul > li.hidden");
    for (let item of listItem) {
        item.classList.remove("hidden")
    }
}


function onActiveClick() {
    const listItem = document.querySelectorAll("li");
    for (let item of listItem) {
        if (item.classList.contains("done") !== false) {
            item.classList.add("hidden")
        } else {
            item.classList.remove("hidden")
        }
    }
}

function onCompletedClick() {
    const listItem = document.querySelectorAll("li");
    for (let item of listItem) {
        if (item.classList.contains("done") !== true) {
            item.classList.add("hidden")
        } else {
            item.classList.remove("hidden")
        }
    }
}


function onDeleteCompletedClick() {
    const listItem = document.querySelectorAll("ul > li.done");
    for (let item of listItem) {
        item.remove()
    }
}
