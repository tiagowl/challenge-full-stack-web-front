<template>

  <v-app>
    <v-navigation-drawer app>
      <h1 class="text-h6 pa-4 bg-blue-grey-darken-1 pl-8">Módulo Acadêmico</h1>
      <v-divider></v-divider>
      <v-list>
        <v-list-item @click="navigateStudents" class="bg-blue-grey-lighten-4">
          Alunos
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="elevation-1 bg-blue-grey-lighten-4" app>
      <nav class="d-flex justify-center w-100" >
        <h1 v-if="route.name === 'student'" class="text-h6" >Consulta de alunos</h1>
        <h1 v-else="route.name === 'studentDetails'" class="text-h6" >Cadastro de aluno</h1>
      </nav>
    </v-app-bar>
    <v-main :scrollable="true">
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup >

import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

const navigateStudents = () => {
  return router.push({name: "students"})
}

</script>

<style>
</style>
