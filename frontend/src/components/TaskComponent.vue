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
  background: antiquewhite;

  width: 100%;
  height: 50px;
  display: flex;
  font-size: 16px;
  padding: 12px 20px;
  align-items: center;
  border-radius: 16px;
  border: 2px solid black;
  justify-content: space-between;
  box-shadow: 4px 4px 1px #171717;
}

.task__description {
  margin: 0;
}

.task__controls-wrapper {
  gap: 8px;
  display: flex;
  align-items: center;
}

.app-button {
  background: rosybrown;

  &:hover {
    background: dimgray;
  }
}
</style>