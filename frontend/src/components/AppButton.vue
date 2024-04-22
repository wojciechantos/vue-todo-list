<template>
  <button class="app-button">{{ content }}<slot name="icon"></slot></button>
</template>

<script>
export default {
  props: ['content'],
}
</script>

<style>
.app-button {
  color: black;
  cursor: pointer;
  border-radius: 8px;
  padding: 10px 20px;
  border: 2px solid black;
  transition: background 0.2s;
  background-color: transparent;

}
</style>