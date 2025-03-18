const addBtn = document.querySelector('.fa-plus');
const input = document.querySelector('.footer_input');
const items = document.querySelector('.items');

document.addEventListener('DOMContentLoaded', loadItems);

function createItem(text, completed = false, time = '') {
  const itemRow = document.createElement('li');
  itemRow.className = 'item';
  if (completed) itemRow.classList.add('item_done');

  itemRow.innerHTML = `
    <span class="text">${text}</span>
    <span class="time">${time}</span>
    <i class="fa-solid fa-check"></i>
    <i class="fa-solid fa-trash-can"></i>
  `;

  itemRow.querySelector('.fa-check').addEventListener('click', () => {
    itemRow.classList.toggle('item_done');
    const now = new Date().toLocaleTimeString();
    itemRow.querySelector('.time').textContent = itemRow.classList.contains(
      'item_done'
    )
      ? now
      : '';
    saveItems();
  });

  itemRow.querySelector('.fa-trash-can').addEventListener('click', () => {
    itemRow.remove();
    saveItems();
  });

  itemRow.querySelector('.text').addEventListener('click', () => {
    const newText = prompt('할 일을 수정하세요', text);
    if (newText) {
      itemRow.querySelector('.text').textContent = newText;
      saveItems();
    }
  });

  requestAnimationFrame(() => itemRow.scrollIntoView({ block: 'center' }));
  return itemRow;
}

function onAdd() {
  const text = input.value.trim();
  if (!text) {
    input.value = '';
    input.focus();
    return;
  }
  items.appendChild(createItem(text));
  input.value = '';
  input.focus();
  saveItems();
}

function saveItems() {
  const data = [...document.querySelectorAll('.item')].map((item) => ({
    text: item.querySelector('.text').textContent,
    completed: item.classList.contains('item_done'),
    time: item.querySelector('.time').textContent,
  }));
  localStorage.setItem('todoList', JSON.stringify(data));
}

function loadItems() {
  const data = JSON.parse(localStorage.getItem('todoList')) || [];
  data.forEach(({ text, completed, time }) => {
    items.appendChild(createItem(text, completed, time));
  });
}

addBtn.addEventListener('click', onAdd);
input.addEventListener('keyup', (e) => e.key === 'Enter' && onAdd());
