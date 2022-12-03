<script setup>
import TodosService from '../services/todosService'
import UsersService from '../services/usersService'
import {ref} from'vue'

const todos = ref([]);

const todosService = new TodosService();
const usersService = new UsersService();

async function getTodos() {
    todos.value = await todosService.getTodos();
}
getTodos();

defineProps({
    msg: {
        type: String,
        required: true
    }
})



</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
            Trier votre liste de tâches :
<!--    <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. 
        <a href="" target="_blank" rel="noopener"></a> -->
        </h3>
    </div>
</template>
