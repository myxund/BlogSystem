<template>
    <yk-space dir="vertical" size="xl" style="width: 50%;">
        <div class="card" >
            <div class="card_title">
                <p class="card_title_name">访问量</p>
                <yk-radio-group v-model="visitRadio" type="button" :solid="true" @change="getVisit">
                    <yk-radio value="week">近一周</yk-radio>
                    <yk-radio value="month">近一月</yk-radio>
                </yk-radio-group>

            </div>
            <LineChart chartHeight="208px" :data="visitData"/>
        </div>
        <div class="card" >
            <div class="card_title">
                <p class="card_title_name">数据监测</p>
                <yk-radio-group v-model="checkRadio" type="button" :solid="true">
                    <yk-radio value="week">近一周</yk-radio>
                    <yk-radio value="month">近一月</yk-radio>
                </yk-radio-group>
            </div>
            <div style="display: flex;">
                <PieChart title="设备总数" :data="survey.data.device" chartHeight="208px"/>
                <PieChart title="访问总数" :data="survey.data.website" chartHeight="208px"/>
            </div>
        </div>
    </yk-space>
</template>

<script lang="ts" setup>
import { ref, onMounted} from 'vue';
import { LineChart, PieChart } from '../components/echarts/index';
import { visit, survey} from '../mock/data';

//访问量
const visitData = ref([]);

const getVisit = (e: string) => {
    let data = visit.data;
    if (e == "week") {
        data = data.slice(0, 7);
    }
    visitData.value = data;
    //console.log(visitData.value);
    
}

const visitRadio = ref('week');
const checkRadio = ref('week');

onMounted(() => {
    getVisit(visitRadio.value);
})

//数据监测
// const surveyData = ref([]);
// const getSurvey = (e: string) => {
//     let data = survey.data;
//     if (e == "week") {
//         data = data.slice(0, 7);
//     }
//     surveyData.value = data;
//     //console.log(surveyData.value);
// }

</script>

<style lang="less" scoped>

</style>
