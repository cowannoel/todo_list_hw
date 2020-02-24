import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name: "Buy shopping", isDone: false},
        {name: "Clean bathroom", isDone: true},
        {name: "Car's MOT", isDone: false},
  ],
  newTodo: ""
},
    methods: {
      saveNewTodo: function(){
        this.todos.push({
          name: this.newTodo,
          isDone: false
        });
        this.newTodo = "";
      },
      doneTodo: function(index){
        this.todos[index].isDone = true;
        }
    }
  });
});
