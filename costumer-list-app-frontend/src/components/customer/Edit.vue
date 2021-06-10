<template>
  <div>
    <h4>
      <small>
        <button v-on:click="navigate()">Ver Todas as Empresas</button>
      </small>
    </h4>
    <div>
      <h2>Editar Empresa</h2>
      <form @submit.prevent="editEmpresa">
        <div>
          <label for="title"> Nome da Empresa </label>
          <input
            type="text"
            id="nomeempresa"
            v-model="task.nomeempresa"
            name="title"
            placeholder="Nome da Empresa"
          />
        </div>
        <div>
          <label for="title"> Telefone </label>
          <input
            type="text"
            id="telefone"
            v-model="task.telefone"
            name="title"
            placeholder="Telefone"
          />
        </div>
        <div>
          <label for="title"> Status </label>
          <input
            type="text"
            id="status"
            v-model="task.status"
            name="title"
            placeholder="Status"
          />
        </div>
        <div>
          <button type="submit" @click="editEmpresa">Editar Empresa</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      task: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getEmpresa();
  },
  methods: {
    editEmpresa() {
      let taskData = {
        id: this.task.id,
        nomeempresa: this.task.nomeempresa,
        telefone: this.task.telefone,
        status: this.task.status,
      };
      axios.put("http://localhost:3000/tasks/" + this.id, taskData);
      router.push({ name: "home" });
    },
    getEmpresa() {
      axios
        .get("http://localhost:3000/tasks")
        .then((data) => (this.task = data.data));
    },
    //Voltar para Home
    navigate() {
      router.go(-1);
    },
  },
};
</script>