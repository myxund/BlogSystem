<template>
    <div class="indexView">
    <MenuBar />
    <RouterView />
    <TopTitle />
    </div>
</template>


<script setup lang="ts">
import MenuBar from '../components/bar/menuBar.vue';
import TopTitle from '../components/bar/TopTitle.vue';


</script>


<style scoped lang="less">
    .indexView{
        padding-left: 200px;
    }
</style>