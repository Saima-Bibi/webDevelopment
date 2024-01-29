const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById("list-container");

function addtask() {
    if (inputBox.value == "") {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // (which represents the multiplication sign "×").
        li.appendChild(span);
    }
    inputBox.value = ""; 
    savedata();
}
    listContainer.addEventListener("click", function (e) {
        if (e.target.tagName == "LI") {
            e.target.classList.toggle("checked"); // adds the class "checked" if it is not present, and removes it if it is already present.
            savedata();
        }
        else if (e.target.tagName == "SPAN") {
            e.target.parentElement.remove();
            savedata();
        }
    }, false);

    function savedata() {
        localStorage.setItem("data", listContainer.innerHTML);
    }
    function showTask(){
        listContainer.innerHTML=localStorage.getItem("data");
    }
    showTask();

