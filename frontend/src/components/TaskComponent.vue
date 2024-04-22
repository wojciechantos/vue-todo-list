<script>
import axios from 'axios'
import AppButton from '@/components/AppButton.vue';
import AppCheckbox from '@/components/AppCheckbox.vue';
import TrashIcon from '@/components/TrashIcon.vue';

export default {
  components: { AppButton, AppCheckbox, TrashIcon },
  props: {
    task: Object
  },
  methods: {
    deleteTask() {
      axios.delete(`http://localhost:3000/tasks/${this.task._id}`)
          .then(() => this.$emit('delete-task', this.task._id))
    },
    toggleTaskCompletion(e) {
      const completed = e.target.checked;

      axios.put(`http://localhost:3000/tasks/${this.task._id}`, { completed })
          .then(() => this.$emit('toggle-task-completion', { id: this.task._id, completed }));
    }
  }
}
</script>

<template>
  <div class="task">
    <p class="task__description">{{ task.description }}</p>
    <div class="task__controls-wrapper">
      <AppCheckbox :checked="task.completed" @change="toggleTaskCompletion" />
      <AppButton @click="deleteTask"><template v-slot:icon><TrashIcon /></template></AppButton>
    </div>
  </div>
</template>

<style>
.task {
  color: black;
  background: #EFF1F3;

  width: 100%;
  height: 50px;
  display: flex;
  font-size: 16px;
  padding: 12px 6px;
  border-radius: 8px;
  align-items: center;
  box-shadow: 0 0 0 1px #696773;
  justify-content: space-between;
}

.task__description {
  margin: 0;
}

.task__controls-wrapper {
  gap: 8px;
  display: flex;
  align-items: center;
}
</style>