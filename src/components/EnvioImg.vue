<script setup>
import { ref } from 'vue';

const api = 'http://localhost:3040/api/imgs';
const image =ref();
const configFetch = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(image.value),
};

function mandarImg() {
    console.log(typeof image);
    fetch(api,configFetch)
        .then(response => console.log('Mandado'))
        .catch(e => console.error(e))
}

function enviar() {
    alert('Enviado')
}
</script>

<template>
    <div class="todo">
        <p>Mandar imagenes</p>
        <form @submit.prevent="mandarImg" enctype="multipart/form-data">
            <input type="file" name="image" placeholder="Ingresa el archivo" :value="image">
            <button>Mandar</button>
        </form>

    </div>

</template>

<style scoped>
.todo{
    border: 1px solid red;
    padding: 2rem 3rem;
}
</style>