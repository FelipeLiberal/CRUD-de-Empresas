<template>
  <div>
    <div>
      <h1>Lista de Empresas no BD</h1>
      <div v-if="tasks.length === 0">
        <h2>Projeto BugHunt</h2>
      </div>
    </div>

    <div>
      <table v-show="tasks.length > 0">
        <thead>
          <tr>
            <th>Nome da Empresa</th>
            <th>Telefone</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" v-bind:key="task.id">
            <td>{{ task.nomeempresa }}</td>
            <td>{{ task.telefone }}</td>
            <td>{{ task.status }}</td>
            <td>
              <div>
                <div style="margin-bottom: 20px">
                  <router-link :to="{ name: 'Edit', params: { id: task._id } }"
                    >Editar Empresa
                  </router-link>
                  <button @click="deleteTask(task, task._id)">
                    Deletar Empresa
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      tasks: [],
    };
  },

  mounted() {
    axios
      .get("http://localhost:3000/tasks")
      .then((response) => {
        console.log(response.data);
        this.tasks = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  created() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      axios
        .get("http://localhost:3000/tasks")
        .then((data) => (this.tasks = data.data));
    },
    deleteTask(tasks, id) {
      axios
        .delete("http://localhost:3000/tasks/" + id)
        .then((response) => this.tasks.splice(index, 1));
      window.location.reload();
    },
  },
};
</script>