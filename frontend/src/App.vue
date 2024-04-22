<script>
import TodoListContainer from '@/components/TodoListContainer.vue';


export default {
  name: 'VueTodoList',
  components: {
    TodoListContainer,
  },
}

</script>

<template>
  <h1>VueTodoList</h1>
  <TodoListContainer />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

h1 {
  margin: 0;
  font-size: 48px;
}

#app {
  gap: 24px;
  width: 100vw;
  color: white;
  min-height: 100vh;
  padding: 24px;
  display: flex;
  text-align: center;
  background: #2c3e50;
  align-items: center;
  flex-direction: column;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
