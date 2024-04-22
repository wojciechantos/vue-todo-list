<template>
  <div class="tasks-list-container">
    <TaskComponent
        :task="task"
        :key="task._id"
        v-for="task in tasks"
        @delete-task="$emit('delete-task', $event)"
        @toggle-task-completion="$emit('toggle-task-completion', $event)"
    />
    <p class="empty-list-placeholder" v-if="tasks.length === 0">Add some tasks, they will be displayed here!</p>
  </div>
</template>

<script>
import TaskComponent from './TaskComponent.vue';

export default {
  props: ['tasks'],
  components: {
    TaskComponent
  }
}

</script>
<style>
.tasks-list-container {
  gap: 16px;
  width: 100%;
  display: flex;
  margin-top: 40px;
  padding-top: 24px;
  flex-direction: column;
  border-top: 1px solid #696773;
}

.empty-list-placeholder {
  color: #696773;
}
</style>