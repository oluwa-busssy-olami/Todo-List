const toDoItems = document.getElementsByClassName("to-do-items")[0];

const removeIcon = document.getElementById("remove");
const buttonAdd = document.getElementById("addButton");
const input = document.getElementById("input").value;

let inputData = document.getElementById("input").value;
if (inputData == "") {
  alert("please enter the task");
} else {
  document.getElementById("input").value = "";
}

input.addEventListener("submit", function (event) {
  if (event.key === "") addItem();
});

function addItem() {
  let divParent = document.createElement("div");
  let divChild = document.createElement("div");
  let checkIcon = document.createElement("i");
  let removeIcon = document.createElement("i");

  divParent.className = "item";
  divParent.innerHTML = "<div>" + input.value + "</div>";

  checkIcon.className = "fa-regular fa-square-check";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", function () {
    checkIcon.style.color = "limegreen";
  });

  divChild.appendChild(checkIcon);

  removeIcon.className = "fa-solid fa-trash";
  removeIcon.style.color = "darkgray";
  removeIcon.addEventListener("click", function () {
    divParent.remove();
  });

  divChild.appendChild(removeIcon);

  divParent.appendChild(divChild);

  toDoItems.appendChild(divParent);

  input.value = "";
}
