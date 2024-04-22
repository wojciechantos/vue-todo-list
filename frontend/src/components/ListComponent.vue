<template>
  <div class="tasks-list-container">
    <TaskComponent
        :task="task"
        :key="task._id"
        v-for="task in tasks"
        @delete-task="$emit('delete-task', $event)"
        @toggle-task-completion="$emit('toggle-task-completion', $event)"
    />
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
  border-top: 1px solid black;
}
</style>