<template>
    <v-form class="d-flex w-100 pb-15" >
        <v-text-field
            label="Digite sua busca"
        >
        </v-text-field>
        <v-btn x-large class="bg-blue-grey-lighten-3 mr-7" >Pesquisar</v-btn>
        <v-btn @click="pushSubscribe" class="text-white bg-blue-grey-darken-1" >Cadastrar Aluno</v-btn>
    </v-form>
    <v-divider></v-divider>

    <v-table class="w-100 h-auto" >
      <thead class="bg-blue-grey-lighten-3" >
        <tr>
          <th class="text-left" >Registro Acadêmico</th>
          <th class="text-left" >Nome</th>
          <th class="text-left" >CPF</th>
          <th class="text-left" >Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(student, index) in students"
          :key="index"
          :class="{'bg-blue-grey-lighten-5': index % 2 !== 0}"
        >
          <td>{{student.ra}}</td>
          <td>{{student.name}}</td>
          <td>{{student.cpf}}</td>
          <td class="d-flex align-center" >
            <v-btn class="bg-blue-grey-darken-1 mr-2" >Editar</v-btn>
            <v-btn @click="openModal" class="bg-blue-grey-lighten-2" >Excluir</v-btn>
          </td>
      </tr>
      </tbody>
    </v-table>
    <dialog id="dialog" >
      <header class="bg-blue-grey-lighten-4" >
        <h1 class="text-h5" >Excluir Estudante</h1>
      </header>
      <main>
        <h2 class="text-h6 text-blue-grey-darken-1" >Tem certeza que deseja excluir estudante?</h2>
      </main>
      <v-divider></v-divider>
      <v-btn @click="closeModal" class="mt-2 mr-3" id="cancelar" >Cancelar</v-btn>
      <v-btn class="bg-blue-grey-lighten-2 mt-2" >Excluir</v-btn>
    </dialog>
</template>

<script setup>

import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

const pushSubscribe = () => {
  return router.push({
    name: "studentDetails"
  })
}

const openModal = () => {
  const dialog = document.getElementById("dialog");
  dialog.showModal();
}

const closeModal = () => {
  const dialog = document.getElementById("dialog");
  dialog.close();
}

const students = [
    {ra: 12323123, name: "Paula Souza", cpf: "121.999.999-99"},
    {ra: 12312312, name: "João Silva", cpf: "122.999.999-99"},
    {ra: 98098098, name: "Marina Miranda", cpf: "123.999.999-99"},
    {ra: 24839483, name: "Maurício Souza", cpf: "124.999.999-99"},
]

</script>

<style scoped>

#dialog{
  margin: 0 auto;
  margin-top: 7rem;
  border-radius: 0.3rem;
  border: none;
  width: 25rem;
  height: 13rem;
}

#dialog header{
  display: flex;
  align-items: center;
  padding-left: 1rem;
  height: 3.5rem;
}

#dialog main{
  height: 6rem;
  display: flex;
  padding-left: 0.5rem;
  padding-top: 1rem;
}

#dialog main h2{
  text-align: center;
}

#cancelar{
  margin-left: 10rem;
}

</style>