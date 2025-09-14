<template>
    <div class="headBar">
        <!-- 左侧 -->
        <yk-space align="center" :size="12" style="cursor: pointer;" @click="backHome">
            <img src="../../assets/strawberry.svg" class="logo">
            <span class="name">逸刻博客后台</span>
        </yk-space>

        <!-- 右侧 -->
        <yk-space align="center" size="xl">
            <yk-badge is-dot>
                <IconMailOutline style="font-size: 20px;"/>
            </yk-badge>
            <yk-avatar style="background-color: rgb(245 61 61)">
                <icon-alarm-fill style="font-size: 20px;"/>
            </yk-avatar>
            <div><yk-theme /></div>
            <yk-button type="primary">退出</yk-button>
        </yk-space>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'; 
const router = useRouter()

//返回总览
const backHome=()=>{
    router.push('/')
}
</script>

<style lang="less" scoped>
.headBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    background-color: @bg-color-l;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 @space-xl;
}
.logo{
    width: 38.95px;
    height: 24px;
}
.name{
    font-size: 20px;
    font-weight: 600;
}
</style>