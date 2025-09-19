//回复内容
export type ReplyData = {
    id: number;
    article?: {
        id: number;
        name: string; // 修改为name字段以匹配实际数据结构
        title?: string; // 保留title字段以保持向后兼容
    };
    user: {
        id: string | number;
        name: string;
        imgurl: string;
    }
    comment: string;//内容
    moment: string;//时间
    complaint?: number;//举报数
}