<template>
    <yk-space dir="vertical" size="xl">
        <TopTitle :is-search="false" />
        <gather />
        <yk-space style="width: 100%;">
            <datas />
            <div style="background-color: #fff;height: 30px;">
                评论
            </div>
        </yk-space>
    </yk-space>
</template>


<script setup lang="ts">
import TopTitle from '../components/bar/TopTitle.vue';
import gather from '../overView/gather.vue'
import datas from '../overView/datas.vue'
</script>


<style lang="less" scoped></style>