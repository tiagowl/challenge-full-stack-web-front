<template>
    <v-form class="pr-15" >
        <div class="d-flex pt-10 mb-3" >
            <label class="pt-4 pl-4 bg-blue-grey-lighten-5" >Registro acadêmico</label>
            <v-text-field></v-text-field>
        </div>
        <div class="d-flex mb-3" >
            <label class="pt-4 pl-4 bg-blue-grey-lighten-5" >Email</label>
            <v-text-field></v-text-field>
        </div>
        <div class="d-flex mb-3" >
            <label class="pt-4 pl-4 bg-blue-grey-lighten-5" >Nome</label>
            <v-text-field></v-text-field>
        </div>
        <div class="d-flex mb-8" >
            <label class="pt-4 pl-4 bg-blue-grey-lighten-5" >CPF</label>
            <v-text-field></v-text-field>
        </div>
        <div class="d-flex justify-end" >
            <v-btn @click="navigateBack" class="bg-blue-grey-lighten-4 text-white" >Cancelar</v-btn>
            <v-btn class="ml-4 bg-blue-grey-lighten-1 text-white" >Salvar</v-btn>
        </div>
    </v-form>
</template>

<script setup>

import {useRouter} from 'vue-router';

const router = useRouter();

const navigateBack = () => {
    return router.back();
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