<template>
    <yk-space dir="vertical" size="xl">
        <TopTitle :is-search="false" />
        <gather />
        <yk-space style="width: 100%;">
            <datas />
            <comment style="width: 50%;" height="515px" :pageSize="8" />
        </yk-space>
    </yk-space>
</template>


<script setup lang="ts">
import TopTitle from '../components/bar/TopTitle.vue';
import gather from '../overView/gather.vue'
import datas from '../overView/datas.vue'
import { comment } from '../components/reply'
</script>


<style lang="less" scoped></style>