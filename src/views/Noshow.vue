<script setup>
const imgurl = ['https://thumbsnap.com/s/4oa4SM4H.jpg?0405','https://thumbsnap.com/s/8GbcjyLb.jpg?0405','https://thumbsnap.com/s/wgAgLrTf.jpg?0405','https://thumbsnap.com/s/KLLoVLwC.jpg?0405'];

</script>

<template>
    <div>
        <h3>NO for all img</h3>
        <img v-for="x in imgurl" :src="x" alt="">
    </div>
</template>

<style scoped>

</style>