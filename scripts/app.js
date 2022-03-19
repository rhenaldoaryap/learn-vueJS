const TodosApp = {
  data() {
    return {
      newTodo: "Learning VueJS!",
      enteredTodoText: "",
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();
      this.newTodo = this.enteredTodoText;
      this.enteredTodoText = "";
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");
