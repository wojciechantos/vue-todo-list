<script>
import axios from 'axios';
import PlusIcon from '@/components/PlusIcon.vue';
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
    AppButton, PlusIcon
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
    <AppButton @click="addTask"><template v-slot:icon><PlusIcon /></template></AppButton>
  </div>
</template>

<style>
.add-task-wrapper {
  gap: 8px;
  width: 100%;
  display: flex;

  input {
    width: 100%;
    padding: 12px 6px;
    border-radius: 8px;
    transition: background 0.2s;
    box-shadow: 0 0 0 1px #696773;

    &:hover, &:focus, &:active {
      background: #EFF1F3;
    }
  }
}
</style>