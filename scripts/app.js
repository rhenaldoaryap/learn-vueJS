const TodosApp = {
  data() {
    return {
      todos: [],
      enteredTodoText: "",
      editedTodoId: null,
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();

      if (this.editedTodoId) {
        // Updating
        // In Vue we couldn't use "this" keyword to referring to the data object because "this" keyword were inside of another function
        // this todoId trick will solve the issue
        const todoId = this.editedTodoId;
        // Find the index / id text that we want to edit
        const todoIndex = this.todos.findIndex(function (todoItem) {
          return todoItem.id === todoId;
        });

        const updateTodoItem = {
          id: this.todos[todoIndex].id,
          text: this.enteredTodoText,
        };

        this.todos[todoIndex] = updateTodoItem;
        this.editedTodoId = null;
      } else {
        // Creating
        const newTodo = {
          text: this.enteredTodoText,
          id: new Date().toISOString(),
        };
        this.todos.push(newTodo);
      }

      this.enteredTodoText = "";
    },
    startEditTodo(todoId) {
      this.editedTodoId = todoId;
      const todo = this.todos.find(function (todoItem) {
        return todoItem.id === todoId;
      });
      this.enteredTodoText = todo.text;
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(function (todoItem) {
        return todoItem.id !== todoId;
      });
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");
