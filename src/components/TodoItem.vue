<template>
  <li :class="{ done: todo.selesai }">
    <label>
      <input
        type="checkbox"
        :checked="todo.selesai"
        @change="toggle(todo.id)"
      />
      <span>{{ todo.nama }}</span>
    </label>
    <button @click="hapus(todo.id)">🗑</button>
  </li>
</template>

<script setup>
defineProps(['todo', 'toggle', 'hapus'])
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0.75rem 1rem;
  margin: 0.5rem 0;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: 0.3s ease;
}

li.done {
  background-color: #e0f2f1;
  text-decoration: line-through;
  color: #666;
}

button {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: #e53935;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  color: #b71c1c;
}
</style>
