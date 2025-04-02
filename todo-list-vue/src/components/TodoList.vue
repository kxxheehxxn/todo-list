<script setup>
import { ref, onMounted, watch } from 'vue';
import TodoItem from '@/components/TodoItem.vue';
import TodoInput from '@/components/TodoInput.vue';

const todos = ref(JSON.parse(localStorage.getItem('todoList')) || []);

const addItem = (text) => {
  todos.value.push({ text, completed: false, time: '' });
};

const toggleDone = (index) => {
  const now = new Date().toLocaleTimeString();
  todos.value[index].completed = !todos.value[index].completed;
  todos.value[index].time = todos.value[index].completed ? now : '';
};

const removeItem = (index) => {
  todos.value.splice(index, 1);
};

const editItem = (index, newText) => {
  if (newText) todos.value[index].text = newText;
};

watch(
  todos,
  () => {
    localStorage.setItem('todoList', JSON.stringify(todos.value));
  },
  { deep: true }
);
</script>

<template>
  <div class="container">
    <header class="header">TODO LIST</header>
    <ul class="items">
      <TodoItem
        v-for="(item, index) in todos"
        :key="index"
        :item="item"
        @toggle="toggleDone(index)"
        @remove="removeItem(index)"
        @edit="editItem(index, $event)"
      />
    </ul>
    <TodoInput @add="addItem" />
  </div>
</template>

<style scoped>
.container {
  width: 90%;
  max-width: 600px;
  margin: 50px auto;
  background-color: #f1f0f7;
  box-shadow: 9px 11px 5px rgba(125, 124, 125, 1);
  border-radius: 20px;
  padding: 2rem;
}
.header {
  padding: 2rem;
  font-size: 2rem;
  text-align: center;
  background: linear-gradient(
    166deg,
    rgba(237, 193, 211, 1) 0%,
    rgba(127, 188, 242, 1) 100%
  );
  border-radius: 20px 20px 0 0;
}
.items {
  padding: 2rem;
  max-height: 500px;
  overflow-y: auto;
}
</style>
