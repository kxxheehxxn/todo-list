<template>
  <li :class="['item', { item_done: item.completed }]">
    <span
      class="text"
      @click="$emit('edit', prompt('할 일을 수정하세요', item.text))"
      >{{ item.text }}</span
    >
    <div class="icons">
      <span class="time">{{ item.time }}</span>
      <i class="fa-solid fa-check" @click="$emit('toggle')"></i>
      <i class="fa-solid fa-trash-can" @click="$emit('remove')"></i>
    </div>
  </li>
</template>

<script setup>
defineProps(['item']);
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between; /* 아이템과 아이콘을 양 끝으로 분배 */
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  border-bottom: 1px solid lightgray;
}

.item_done .text {
  opacity: 0.5;
  text-decoration: line-through;
}

/* .icons 클래스로 아이콘들을 묶어서 오른쪽에 정렬 */
.icons {
  display: flex;
  justify-content: flex-end;
  gap: 10px; /* 아이콘 간의 간격 */
}

.fa-check,
.fa-trash-can {
  font-size: 16px;
  transition: 0.3s;
}

.fa-check:hover {
  color: dodgerblue;
}

.fa-trash-can:hover {
  color: red;
  transform: scale(1.1);
}
</style>
