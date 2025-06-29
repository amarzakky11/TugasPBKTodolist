<template>
  <div class="todo-container">
    <h1>📝 <span class="highlight">Todo List PBK</span></h1>

    <div class="input-group">
      <input v-model="tugasBaru" @keyup.enter="tambahTugas" placeholder="Tulis tugas baru..." />
      <button @click="tambahTugas">Tambah</button>
    </div>

    <div class="grid">
      <!-- Kolom Tugas Belum Selesai -->
      <div class="column">
        <h2>⏳ Belum Selesai</h2>
        <ul class="todo-list">
          <TodoItem
            v-for="t in todoStore.tugasBelumSelesai"
            :key="t.id"
            :todo="t"
            :toggle="todoStore.toggleSelesai"
            :hapus="todoStore.hapusTugas"
          />
        </ul>
      </div>

      <!-- Kolom Tugas Selesai -->
      <div class="column selesai">
        <h2>✅ Selesai</h2>
        <ul class="todo-list">
          <TodoItem
            v-for="t in todoStore.tugasSelesai"
            :key="t.id"
            :todo="t"
            :toggle="todoStore.toggleSelesai"
            :hapus="todoStore.hapusTugas"
          />
        </ul>
      </div>
    </div>

    <p class="info">
      📌 Total belum selesai: <strong>{{ todoStore.jumlahBelumSelesai }}</strong>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'
import TodoItem from '@/components/TodoItem.vue'

const todoStore = useTodoStore()
const tugasBaru = ref('')

function tambahTugas() {
  if (tugasBaru.value.trim()) {
    todoStore.tambahTugas(tugasBaru.value)
    tugasBaru.value = ''
  }
}
</script>

<style scoped>
.todo-container {
  max-width: 960px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to bottom right, #e3f2fd, #e8f5e9);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 2rem;
  color: #1565c0;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #2e7d32;
}

.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.input-group input {
  flex: 1;
  max-width: 400px;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 10px;
  border: 2px solid #90caf9;
}

.input-group button {
  background-color: #388e3c;
  color: white;
  padding: 0.75rem 1.25rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.input-group button:hover {
  background-color: #2e7d32;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.column {
  flex: 1;
  min-width: 300px;
  background: white;
  padding: 1.25rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.column.selesai {
  background: #e8f5e9;
}

.column h2 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #00695c;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info {
  margin-top: 2rem;
  text-align: center;
  font-size: 1.1rem;
  color: #d32f2f;
}
</style>
