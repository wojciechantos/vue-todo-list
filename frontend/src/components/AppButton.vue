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
  display: flex;
  cursor: pointer;
  border-radius: 8px;
  padding: 10px 12px;
  background: #FED766;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  box-shadow: 0 0 0 1px #696773;

  &:hover {
    background: #ffc334;
  }

  svg {
    width: 16px;
    height: 16px;
  }

}
</style>