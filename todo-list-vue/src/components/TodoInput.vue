<script setup>
import { ref } from 'vue';
const newTodo = ref('');
const emit = defineEmits(['add']);
const addNewItem = () => {
  if (newTodo.value.trim()) {
    emit('add', newTodo.value.trim());
    newTodo.value = '';
  }
};
</script>

<template>
  <footer class="footer">
    <input
      type="text"
      v-model="newTodo"
      class="footer_input"
      @keyup.enter="addNewItem"
      placeholder="할 일을 입력하세요"
    />
    <i class="fa-solid fa-plus" @click="addNewItem"></i>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    166deg,
    rgba(237, 193, 211, 1) 0%,
    rgba(127, 188, 242, 1) 100%
  );
  border-radius: 0 0 20px 20px;
  padding: 15px;
}
.footer_input {
  width: 80%;
  border: none;
  font-size: 2rem;
  padding: 1rem;
  border-bottom: 2px solid #ccc;
  outline: none;
  transition: border-color 0.3s;
  border-radius: 20px 0 0 20px;
}
.footer_input:focus {
  border-bottom: 2px solid dodgerblue;
}
.fa-plus {
  width: 20%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: black;
  border-radius: 0 20px 20px 0;
  color: white;
  cursor: pointer;
}
.fa-plus:hover {
  transform: scale(1.1);
}
</style>
