const form = document.querySelector("#todoForm");
const input = document.querySelector("input");
const ul = document.querySelector("#todoList");
const main = document.querySelector(".main");

// Create List - This code details the createLi() function, which adds the task item in the list, which consist of a span, an input checkbox, and two buttons.

function createLi() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = input.value + " ";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "completedBox";
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  li.appendChild(span);
  li.appendChild(checkbox);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  return li;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const li = createLi();

  if (input.value === "") {
    alert("Invalid Entry! Tasks can not be empty!");
  } else if (input.value.length > 40) {
    alert("Invalid Entry! Tasks must be under 40 characters!");
  } else {
    ul.appendChild(li);
    input.value = "";
  }
});

// Completed Checkbox - The checkbox adds the class "completed" to the list item, which paired with the CSS, greys out the task item.

ul.addEventListener("change", (event) => {
  const checkbox = event.target;
  const isChecked = checkbox.checked;
  const li = checkbox.closest("li");

  if (isChecked) {
    li.classList.add("completed");
  } else {
    li.classList.remove("completed");
  }
});

// Button Actions - Code enabling edit and remove buttons to function.

ul.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.textContent === "Remove") {
      ul.removeChild(li);
    } else if (button.textContent === "Edit") {
      const span = li.firstElementChild;
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = "Save";
      input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          const span = document.createElement("span");
          span.textContent = input.value;
          li.insertBefore(span, input);
          li.removeChild(input);
          button.textContent = "Edit";
        }
      });
    } else if (button.textContent === "Save") {
      const input = li.firstElementChild;
      const span = document.createElement("span");
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = "Edit";
    }
  }
});
