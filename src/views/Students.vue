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
    <div v-if="isLoading" class="d-flex justify-center align-center">
      <img class="w-25" src="https://media.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="">
    </div>
    <v-table v-if="isReady" class="w-100 h-auto" >
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
          v-for="(student, index) in state"
          :key="index"
          :class="{'bg-blue-grey-lighten-5': index % 2 !== 0}"
        >
          <td>{{student.ra}}</td>
          <td>{{student.name}}</td>
          <td>{{student.cpf}}</td>
          <td class="d-flex align-center" >
            <v-btn @click="openEdit(student.id)" class="bg-blue-grey-darken-1 mr-2" >Editar</v-btn>
            <v-btn @click="openModal(student.id)" class="bg-blue-grey-lighten-2" >Excluir</v-btn>
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
      <v-btn @click="deleteStudent" class="bg-blue-grey-lighten-2 mt-2" >Excluir</v-btn>
    </dialog>
</template>

<script setup>

import { useRouter, useRoute } from 'vue-router';
import api from '../services/api';
import { useAsyncState } from '@vueuse/core';
import {ref} from 'vue';

const router = useRouter();
const studentId = ref();

const pushSubscribe = () => {
  return router.push({
    name: "studentDetails"
  })
}

const openEdit = (id) => {
  return router.push({
    name: "updateStudent",
    params:{id}
  })
}

const deleteStudent = () => {
  const deleteStudent = useAsyncState(
        api.delete(`/students/${studentId.value}`)
        .then(t => t.data),
        {id: null},
  );

  closeModal();
  location.reload();
}

const { state, isReady, isLoading } = useAsyncState(
  api
    .get('/students')
    .then(t => t.data),
  { id: null },
)

const openModal = (id) => {
  studentId.value =id;
  const dialog = document.getElementById("dialog");
  dialog.showModal();
}

const closeModal = () => {
  const dialog = document.getElementById("dialog");
  dialog.close();
}

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