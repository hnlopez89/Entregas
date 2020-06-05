class TodoList {
  constructor(form, list, keyName) {
    // Nombre del key con el que guardar la lista en el localStorage
    this.keyName = keyName;

    // Lista de todos
    this.todos = [];

    // Miro a ver si hay todos guardados en el localStorage y si los hay los uso como todos iniciales
    const storedTodos = JSON.parse(window.localStorage.getItem(this.keyName));

    if (storedTodos) {
      this.todos = storedTodos;
    }

    this.form = form;
    this.list = list;
    this.cleanButton = this.form.querySelector("button.clean");
    this.deleteAllButton = this.form.querySelector("button.delete");

    if (
      !this.form ||
      !this.list ||
      !this.cleanButton ||
      !this.deleteAllButton
    ) {
      throw new Error("Hai elementos que faltan, comprueba tu HTML");
    }

    this.render();
  }

  attachEvents() {
    // Cuando se envía el formulario ejecute el método addTodo con el texto del input
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const input = this.form.querySelector("input#todo");

      if (input.value.length > 0 && input.value.length < 200) {
        this.addTodo(input.value);

        input.value = "";
      }
    });

    // Cuando se pulse el boton de limpiar tareas ejecute el método cleanTodoList
    this.cleanButton.addEventListener("click", (e) => {
      // Cosas
    });

    // Cuando se pulse el botón de borrar todo ejecute el método deleteAllTodos
    this.deleteAllButton.addEventListener("click", (e) => {
      // Cosas
      if (
        window.prompt("Escribe BORRAR para borrar todos los todos") === "BORRAR"
      ) {
        this.deleteAllTodos();
      }
    });

    // Evento delegado: cada vez que clico en la lista, si donde clico es en el checkbox, marco el todo como hecho/pendiente

    this.list.addEventListener("click", (event) => {
      const target = event.target;

      if (target.matches('input[type="checkbox"]')) {
        this.toggleTodoStatus(target.getAttribute("data-index"));
      }
    });
  }

  // Este método añade un nuevo todo
  addTodo(text) {
    if (text.length === 0) throw new Error("El texto del todo está vacío");

    const newTodo = {
      text: text,
      done: false,
    };

    this.todos.unshift(newTodo);

    this.sync();
  }

  // Este método borra todos los todos
  deleteAllTodos() {
    this.todos = [];

    this.sync();
  }

  // Este método marca el todo (index) como hecho/pendiente
  toggleTodoStatus(index) {
    const todo = this.todos[index];

    todo.done = !todo.done;

    this.sync();
  }

  // Este método elimina de la lista los todos marcados como hecho
  cleanTodoList() {
    const cleanList = this.todos.filter((todo) => !todo.done);

    this.todos = cleanList;

    this.sync();
  }

  // Este método sincroniza la lista actual de todos con el localStorage
  // y escribe los todos en el elemento html
  sync() {
    window.localStorage.setItem(this.keyName, JSON.stringify(this.todos));

    this.render();
  }

  // Escribe la lista de todos en el elemento html
  render() {
    this.list.innerHTML = "";

    // <li class="done">
    //   <input type="checkbox" checked>
    //   <p>Texto de la tarea Texto de la tarea Texto de la tarea Texto de la tarea</p>
    // </li>

    const fragment = document.createDocumentFragment();

    let i = 0;

    for (const todo of this.todos) {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("data-index", i);

      if (todo.done) {
        li.classList.add("done");
        input.setAttribute("checked", true);
      }

      const p = document.createElement("p");
      p.textContent = todo.text;

      li.append(input);
      li.append(p);

      fragment.append(li);

      i++;
    }

    this.list.append(fragment);
  }
}

// Selecciono los elementos
const form = document.querySelector("form#new-todo");
const list = document.querySelector("ul#todos");

// Instancio la clase!
const myTodos = new TodoList(form, list, "stored-todos");
myTodos.attachEvents();
