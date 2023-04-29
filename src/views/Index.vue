<script setup>
import { RouterLink, RouterView } from 'vue-router';
const rar = [];
function ir() {
    this.$router.push('/about')
}

</script>

<template>

<section>
    <h1> <span>Rule</span> <span>.</span> <span>34</span> </h1>
    <img src="https://rule34.xxx/images/header2" alt="imagen">
    <div>
        <input type="text">
        <button @click="ir">Buscar</button>
    </div>
    
</section>

</template>

<style scoped>

</style>