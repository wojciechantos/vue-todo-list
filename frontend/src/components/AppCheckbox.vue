<script>
export default {
  props: ['isChecked'],
}
</script>

<template>
  <input class="app-checkbox" type="checkbox" :checked="this.isChecked">
</template>

<style>
.app-checkbox {
  color: black;
  cursor: pointer;
  border-radius: 8px;
  padding: 10px 20px;
  border: 2px solid black;
  transition: background 0.2s;
  background-color: transparent;

}
</style>