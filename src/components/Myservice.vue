<script setup>
import { ref } from 'vue';

const url = 'http://localhost:8040/usuarios';
var todo = ref([]);

const api = async () => {
  fetch(url).then(res  => res.json())
  .then(data => {
    console.log(data);
    todo.value = data})
  .catch(err => console.log(`error al traer la informacion ${err}`));
}
api()

</script>

<template>
    {{ todo[0].name }}
</template>