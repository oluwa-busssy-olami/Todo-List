const toDoItems = document.getElementsByClassName("to-do-items")[0];
const firstInput = document.getElementById("input");
const removeIcon = document.getElementById("remove");

input.addEventListener("submit", function (e) {
  if (e.key === "Enter");
  addItem();
});

function addItem() {
  let divParent = document.createElement("div");
  // div child is holding the icons
  let divChild = document.createElement("div");

  let checkIcon = document.createElement("i");
  let removeIcon = document.createElement("i");

  //item is where the task goes in
  divParent.className = "item";
  //name of the todo list goes inside this input
  divParent.innerHTML = "<div>" + input.value + "</div>";

  checkIcon.className = "fa-regular fa-square-check";
  //initial color
  checkIcon.style.color = "lightgray";
  // when clicked on
  checkIcon.addEventListener("click", function () {
    checkIcon.style.color = "green";
  });

  //Add the checkicon into the divchild
  divChild.appendChild(checkIcon);

  removeIcon.className = "fa-solid fa-trash";
  removeIcon.style.color = "darkgray";
  //delete the div parent when click on
  removeIcon.addEventListener("click", function () {
    divParent.remove();
  });

  divChild.appendChild(removeIcon);

  divParent.appendChild(divChild);
  //add the divParent to the item
  toDoItems.appendChild(divParent);

  input.value = "";
}
