<template>
  <LineChart 
    title="股票价格走势"
    :data="chartData"
    :xAxisData="days"
    :dataZoom="true"
    height="400px"
  />
</template>

<script setup>
import LineChart from '@/components/LineChart/LineChart.vue';

// 生成30天的日期
const days = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
const chartData = [
  {
    name: '公司A',
    values: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 50)
  },
  {
    name: '公司B',
    values: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 50)
  }
];
</script>