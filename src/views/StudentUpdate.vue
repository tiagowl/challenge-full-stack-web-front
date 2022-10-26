<template>
    <v-form class="pr-15" >
        <div class="d-flex pt-10 mb-3" >
            <label class="pt-4 pl-4 bg-blue-grey-lighten-5" >Registro acadêmico</label>
            <v-text-field v-model="studentState.ra" disabled ></v-text-field>
        </div>
        <div class="d-flex mb-3" >
            <label class="pt-4 pl-4 bg-blue-grey-lighten-5" >Email</label>
            <v-text-field v-model="studentState.email" ></v-text-field>
        </div>
        <div class="d-flex mb-3" >
            <label class="pt-4 pl-4 bg-blue-grey-lighten-5" >Nome</label>
            <v-text-field v-model="studentState.name" ></v-text-field>
        </div>
        <div class="d-flex mb-8" >
            <label class="pt-4 pl-4 bg-blue-grey-lighten-5" >CPF</label>
            <v-text-field v-model="studentState.cpf" disabled ></v-text-field>
        </div>
        <div class="d-flex justify-end" >
            <v-btn @click="navigateBack" class="bg-blue-grey-lighten-4 text-white" >Cancelar</v-btn>
            <v-btn @click="updateStudent" class="ml-4 bg-blue-grey-lighten-1 text-white" >Salvar</v-btn>
        </div>
    </v-form>
    <v-snackbar
      v-model="fetchSucess"
    >
      Usuário editado com sucesso.

      <template v-slot:actions>
        <v-btn
          color="text-blue-grey-lighten-5"
          variant="text"
          @click="fetchSucess = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      v-model="fetchError.error"
      color="red"
    >
      {{fetchError.message}}

      <template v-slot:actions>
        <v-btn
          color="text-blue-grey-lighten-5"
          variant="text"
          @click="fetchError.error = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script setup>

import {useRouter} from 'vue-router';
import { useAsyncState } from '@vueuse/core';
import { useRouteParams } from '@vueuse/router';
import {ref} from 'vue';
import api from '@/services/api';

const router = useRouter();
const studentId = useRouteParams('id');
const studentState = ref({name: "",email: ""});
const fetchSucess = ref(false);
const fetchError = ref({error: false, message: ""});

const navigateBack = () => {
    return router.back();
}

const updateStudent = () => {
    const {state, isLoading, isReady, error} = useAsyncState(
        api.put(`/students/${studentId.value}`, studentState.value)
        .then(t => { fetchSucess.value = true; return t.data})
        .catch( error => fetchError.value = {error: true, message: error.response.data.message[0]}),
        {id: null},
    );
    if(isReady && !error){
        fetchSucess.value = true;
    }
    return isLoading;
}


</script>

<style scoped>

label{
    height: 3.5rem;
    width: 15rem;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
    border: 1px solid rgb(216, 216, 216)
}

</style>