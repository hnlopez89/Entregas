const form = document.querySelector("form#new-todo");
const list = document.querySelector("ul#todos");

const addTask = (text) => {
  // Esta función añade una tarea a la lista

  // Creo el li
  const li = document.createElement("li");

  // Creo el párrafo con el texto del
  const p = document.createElement("p");
  p.textContent = text;

  // Creo el checkbox que borra
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  // Cuando hago click en el botón que elimine el li que acabamos de crear
  input.addEventListener("click", () => {
    li.remove();
  });
  // Añado el checkbox al li
  li.append(p);
  // Añado el párrafo con la tarea al li
  li.append(p);

  // Añado el li a la lista
  list.prepend(li);
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const toDo = form.querySelector("input#todo");

  const text = toDo.value;

  addTweet(text);
  input.value = "";
}; /*
form.addEventListener("submit", handleFormSubmit);

document.body.addEventListener("click", handleListClick);
*/
/*
const handleListClick = (event) => {
  // Si donde hice click es en el botón que me interesa
  // Borra el li más cercano a ese botón
  const target = event.target;

  if (target.matches("ul button.action")) {
    target.closest("li").remove();
  }
};
*/
