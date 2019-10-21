import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {task: "Grocery Shop", isDone: true},
        {task: "Do the dishes", isDone: false},
        {task: "Feed the cat", isDone: false}
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.items.push({
          task: this.newItem,
          isDone: false
        });
        this.newItem = ""
      },
      doItem: function(index) {
        this.items[index].isDone = true;
      }
    }
  });

});
