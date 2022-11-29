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
</script>

<template>
    
</template>
