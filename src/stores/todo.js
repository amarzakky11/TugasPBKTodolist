import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  getters: {
    jumlahBelumSelesai: state => state.todos.filter(t => !t.selesai).length,
    tugasBelumSelesai: state => state.todos.filter(t => !t.selesai),
    tugasSelesai: state => state.todos.filter(t => t.selesai)
  },
  actions: {
    tambahTugas(nama) {
      this.todos.push({ id: Date.now(), nama, selesai: false })
    },
    hapusTugas(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    toggleSelesai(id) {
      const tugas = this.todos.find(t => t.id === id)
      if (tugas) tugas.selesai = !tugas.selesai
    }
  }
})
