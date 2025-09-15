<template>
    <yk-space dir="vertical" size="xl" style="width: 50%;">
        <div class="data-card">
            <div class="data-card_title">
                <p class="data-card_title_name">访问量</p>
                <yk-radio-group v-model="radio" type="button" :solid="true">
                    <yk-radio value="week">近一周</yk-radio>
                    <yk-radio value="month">近一月</yk-radio>
                </yk-radio-group>
            </div>
        </div>
        <div class="data-card">
            <div class="data-card_title">
                <p class="data-card_title_name">数据监测</p>
                <yk-radio-group v-model="radio" type="button" :solid="true">
                    <yk-radio value="week">近一周</yk-radio>
                    <yk-radio value="month">近一月</yk-radio>
                </yk-radio-group>
            </div>

        </div>
    </yk-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const radio = ref('week');

</script>

<style lang="less" scoped>
.data-card {
    padding: @space-xl;
    border-radius: @radius-m;
    background: @bg-color-l;
    width: 100%;
    &_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: @space-l;
    }
    &_title_name {
        .font-l();
        font-weight: 600;
        color: @font-color-l;
    }
}
</style>
