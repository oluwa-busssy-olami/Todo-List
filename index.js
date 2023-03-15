const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const removeIcon = document.getElementById("remove");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addItem();
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
  if (input.value === "") {
    return "input an item";
  }
}
