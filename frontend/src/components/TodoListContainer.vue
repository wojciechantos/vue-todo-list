<template>
  <div class="todo-list-container">
    <AddTask @add-task="addTask" />
    <List :tasks="tasks" @delete-task="deleteTask" @toggle-task-completion="toggleTaskCompletion"/>
  </div>
</template>

<script>
import axios from 'axios';
import List from './ListComponent.vue';
import AddTask from './AddTask.vue';


export default {
  components: {
    AddTask,
    List
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    loadTasks() {
      axios.get('http://localhost:3000/tasks')
          .then((response) => {
            this.tasks = response.data;
          })
    },
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task._id !== id);
    },
    toggleTaskCompletion(item) {
      const task = this.tasks.find((task) => task._id === item.id);

      if(task) {
        task.completed = item.completed;
      }
    }
  },
  created() {
    this.loadTasks();
  }
}

</script>

<style>
  .todo-list-container {
    background: #272727;
    box-shadow: 0 0 0 3px #000000;

    width: 100%;
    max-width: 650px;
    padding: 24px 48px;
    border-radius: 16px;
    border: 2px solid #696773;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
</style>
