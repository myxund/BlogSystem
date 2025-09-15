<template>
  <yk-space>
    <div v-for="(item, index) in overLink" :key="index">
      <yk-space>
        <yk-text>{{ item.name }}</yk-text>
        <yk-title>{{ item.total }}</yk-title>
      </yk-space>

      <yk-button v-if="index > 0" size="xl" type="secondary" shape="square">
        <IconPlusOutline />
      </yk-button>
    </div>
  </yk-space>
</template>

<script lang="ts" setup>
import { overLink } from '../utils/menu';
import { overview } from '../mock/data'

//获取数据

</script>

<style lang="less" scoped>

</style>
