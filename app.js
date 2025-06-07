const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const btn = document.querySelector("button");

function addTask() {
    if (inputBox.value.trim() === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Add event listener to button
btn.addEventListener("click", addTask);

// Add event listener for pressing Enter key
inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Handle click events (mark as done or delete)
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save list data to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show saved list from localStorage
function showList() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
showList();
