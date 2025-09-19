<template>
    <yk-space size="m" class="reply">
        <yk-avatar img-url="../../src/assets/strawberry.svg">
        </yk-avatar>

        <yk-space dir="vertical" size="s" class="reply_main">
            <div class="reply_name">
                <yk-text strong>{{ content?.user.name }}</yk-text>
                <yk-text type="third" style="font-size: 12px;">{{ content?.moment }}</yk-text>
            </div>
            <yk-text type="secondary">{{ content?.comment }}</yk-text>
            <yk-space size="s" align="center">
                <yk-tag type="primary">
                    {{ content?.article?.name || content?.article?.title || '未命名文章' }}
                </yk-tag>
                <yk-text type="danger" v-show="(content?.complaint ?? 0) > 0">举报 {{ content?.complaint || 0 }}</yk-text>
            </yk-space>
        </yk-space>

    </yk-space>
</template>

<script lang="ts" setup>

import type { ReplyProps } from './reply'

const props = withDefaults(defineProps<ReplyProps>(), {
    isComment: true,
})
</script>

<style lang="less" scoped>
.reply {
    width: 100%;
    &_main {
        border-bottom: 1px solid @line-color-s;
        width: 100%;
        padding-bottom: @space-l;
        flex: 1;
    }

    &_name {
        display: flex;
        flex-direction: column;
    }
}
</style>
