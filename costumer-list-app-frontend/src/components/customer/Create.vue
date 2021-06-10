<template>
  <div>
    <div>
      <h2>Cadastrar Empresa</h2>
      <form @submit.prevent="createEmpresa">
        <div>
          <label for="title"> Nome da Empresa </label>
          <input
            type="text"
            id="nomeempresa"
            v-model="nomeempresa"
            name="title"
            placeholder="Nome da Empresa"
          />
        </div>
        <div>
          <label for="title"> Telefone </label>
          <input
            type="text"
            id="telefone"
            v-model="telefone"
            name="title"
            placeholder="Telefone"
          />
        </div>
        <div>
          <label for="title"> Status </label>
          <input
            type="text"
            id="status"
            v-model="status"
            name="title"
            placeholder="Status"
          />
        </div>
        <div>
          <button type="submit" @click="createEmpresa">
            Cadastrar Empresa
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import { server } from "../../helper";
import router from "../../router";
export default {
  data() {
    return {
      nomeempresa: "",
      telefone: "",
      status: "",
    };
  },
  methods: {
    createEmpresa() {
      let taskData = {
        nomeempresa: this.nomeempresa,
        telefone: this.telefone,
        status: this.status,
      };
      axios.post("http://localhost:3000/tasks", taskData);
      router
        .push({ name: "home" })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>