<template>
  <LineChart 
    title="月度温度变化"
    :data="chartData"
    :xAxisData="months"
    height="400px"
  />
</template>

<script setup>
import LineChart from '@/components/LineChart/LineChart.vue';

const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
const chartData = [
  {
    name: '最高气温',
    values: [5, 8, 12, 18, 25, 30, 32, 31, 26, 20, 14, 7]
  },
  {
    name: '最低气温',
    values: [-3, -1, 3, 8, 14, 19, 22, 21, 16, 10, 4, -1]
  }
];
</script>