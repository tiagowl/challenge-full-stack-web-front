<template>
    <v-form class="pr-15" >
        <div class="d-flex pt-10 mb-3" >
            <label class="pt-4 pl-4 bg-blue-grey-lighten-5" >Registro acadêmico</label>
            <v-text-field v-model="studentBody.ra" ></v-text-field>
        </div>
        <div class="d-flex mb-3" >
            <label class="pt-4 pl-4 bg-blue-grey-lighten-5" >Email</label>
            <v-text-field v-model="studentBody.email" ></v-text-field>
        </div>
        <div class="d-flex mb-3" >
            <label class="pt-4 pl-4 bg-blue-grey-lighten-5" >Nome</label>
            <v-text-field v-model="studentBody.name" ></v-text-field>
        </div>
        <div class="d-flex mb-8" >
            <label class="pt-4 pl-4 bg-blue-grey-lighten-5" >CPF</label>
            <v-text-field v-model="studentBody.cpf" ></v-text-field>
        </div>
        <div class="d-flex justify-end" >
            <v-btn @click="navigateBack" class="bg-blue-grey-lighten-4 text-white" >Cancelar</v-btn>
            <v-btn @click="saveStudent" :loading="isLoading" class="ml-4 bg-blue-grey-lighten-1 text-white" >Salvar</v-btn>
        </div>
    </v-form>
    <v-snackbar
      v-model="fetchSucess"
    >
      Usuário cadastrado com sucesso.

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
import { useAsyncState } from '@vueuse/core'
import api from '@/services/api';
import {ref} from 'vue';

const router = useRouter();
const studentBody = ref({ra: "", name: "", email: "", cpf: ""});
const fetchSucess = ref(false);
const fetchError = ref({error: false, message: ""});

const navigateBack = () => {
    return router.back();
}

const saveStudent = () => {
    const {state, isLoading, isReady, error} = useAsyncState(
        api.post("/students", studentBody.value)
        .then(t => t.data)
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