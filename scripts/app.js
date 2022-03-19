const TodosApp = {
  data() {
    return {
      newTodo: "Learning VueJS!",
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();
      this.newTodo = "Updated!";
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");
