<template>
    <yk-space dir="vertical" size="xl">
        <TopTitle :is-search="false" />
        <gather />
    </yk-space>

</template>


<script setup lang="ts">
import TopTitle from '../components/bar/TopTitle.vue';
import gather from '../overView/gather.vue'
</script>


<style lang="less" scoped>
</style>