<script setup>
import TodoList from '@/components/TodoList.vue';
</script>

<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ced3df;
}
</style>
