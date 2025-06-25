<template>
  <BarChart 
    title="项目进度"
    :data="chartData"
    :xAxisData="projects"
    :colors="['#FF6B6B', '#4ECDC4', '#FFE66D', '#45B7D1']"
    height="400px"
  />
</template>

<script setup>
import BarChart from '@/components/BarChart/BarChart.vue';

const projects = ['项目A', '项目B', '项目C', '项目D', '项目E'];
const chartData = [
  {
    name: '已完成',
    values: [45, 32, 60, 28, 70],
  },
  {
    name: '进行中',
    values: [30, 45, 25, 50, 20],
  },
  {
    name: '未开始',
    values: [25, 23, 15, 22, 10],
  }
];
</script>