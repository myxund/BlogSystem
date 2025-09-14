<template>
    <div class="indexView">
    <MenuBar />
    <RouterView />
    </div>
</template>


<script setup lang="ts">
import MenuBar from '../components/bar/menuBar.vue';


</script>


<style scoped lang="less">
    .indexView{
        padding-left: 200px;
    }
</style>