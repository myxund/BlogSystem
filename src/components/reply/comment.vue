<template>
    <div class="card comment">
        <div class="card_title">
            <p class="card_title_name">评论 {{ count }} 条</p>
        </div>

        <yk-scrollbar ref="scrollbar" :height="height">
            <yk-space dir="vertical">
                <reply v-for="item in comments" :key="item.id" :content="item" :isComment="true" />
            </yk-space>
        </yk-scrollbar>
        <div class="comment_pag">
            <yk-pagination :total="count" size="m" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import reply from './reply.vue';
import { comment } from '../../mock/data';
import type { CommentProps } from './reply';

const props = withDefaults(defineProps<CommentProps>(), {
    pageSize: 8,
    height:"650px"
})

//总数
const count = ref<number>(123);

//数据内容
const comments = ref()
//请求
type Request = {
    token?: string;
    pageSize: number;//单页条数；
    nowPage: number;//当前页
    count?: boolean;
}

const request: Request = {
    pageSize: props.pageSize,
    nowPage: 1,
    count: false
}

//获取数据
const drwCommentData = (e: boolean) => {
    let data = comment.data;
    if (e) {
        count.value = data.count;
    }
    comments.value = data.list.slice(
        (request.nowPage - 1) * request.pageSize,
        request.nowPage * request.pageSize
    )
    //console.log(data)
}

onMounted(() => {
    drwCommentData(true)
})

</script>

<style lang="less" scoped>
.comment{
    position: relative;
    padding-bottom: 64px;
    &_pag{
        padding: @space-l @space-xl;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-top: 1px solid @line-color-s;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
    }
}
</style>
