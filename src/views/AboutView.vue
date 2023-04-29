<script setup>

const lago = 'hi'
function botoon () {
  alert('Eitoso');
}

</script>

<template>
  <div class="about">
    <form @submit.prevent="botoon">
      <input type="text">
      <input type="text">
      <input type="text">
      <button type="submit" >Enviar</button>
    </form>
  </div>
</template>

<style scoped>

</style>
