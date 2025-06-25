<template>
  <LineChart 
    title="销售额趋势"
    :data="chartData"
    :xAxisData="quarters"
    :showArea="true"
    height="400px"
  />
</template>

<script setup>
import LineChart from '@/components/LineChart/LineChart.vue';

const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
const chartData = [
  {
    name: '2022年',
    values: [120, 150, 180, 200]
  },
  {
    name: '2023年',
    values: [150, 180, 210, 250]
  }
];
</script>