<template>
  <BarChart 
    title="月度销售额"
    :data="chartData"
    :xAxisData="months"
    height="400px"
  />
</template>

<script setup>
import BarChart from '@/components/BarChart/BarChart.vue';

const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月'];
const chartData = [
  {
    name: '产品A',
    values: [120, 132, 101, 134, 90, 230, 210]
  },
  {
    name: '产品B',
    values: [150, 232, 201, 154, 190, 330, 410]
  }
];
</script>