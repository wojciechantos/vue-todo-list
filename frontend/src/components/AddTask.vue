<script>
import axios from 'axios';
import AppButton from '@/components/AppButton.vue';

export default {
  data() {
    return {
      newTask: {
        description: '',
        completed: false
      },
      buttonContent: '+'
    }
  },
  components: {
    AppButton
  },
  methods: {
    addTask() {
      axios.post('http://localhost:3000/tasks', this.newTask)
          .then((response) => {
            this.$emit('add-task', response.data);
            this.newTask = { description: '', completed: false};
          });
    }
  }
}
</script>

<template>
  <div class="add-task-wrapper">
    <input v-model="newTask.description" placeholder="What are your goals for today?" maxlength="100">
    <AppButton @click="addTask" :content="buttonContent" />
  </div>
</template>

<style>
.add-task-wrapper {
  gap: 8px;
  width: 100%;
  display: flex;

  input {
    width: 100%;
    padding: 4px;
    border: 2px solid;
    border-radius: 8px;
    transition: background 0.2s;

    &:hover, &:focus, &:active {
      background: #f5f5f5;
    }
  }

  .app-button {
    background: rosybrown;

    &:hover {
      background: dimgray;
    }
  }
}
</style>