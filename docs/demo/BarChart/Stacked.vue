<template>
  <BarChart 
    title="季度费用统计"
    :data="chartData"
    :xAxisData="quarters"
    :stacked="true"
    height="400px"
  />
</template>

<script setup>
import BarChart from '@/components/BarChart/BarChart.vue';

const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
const chartData = [
  {
    name: '研发费用',
    values: [200, 220, 250, 280]
  },
  {
    name: '市场费用',
    values: [150, 180, 200, 220]
  },
  {
    name: '管理费用',
    values: [100, 120, 130, 140]
  }
];
</script>