<template>
  <BarChart 
    title="部门人员分布"
    :data="chartData"
    :xAxisData="departments"
    type="horizontal"
    height="500px"
  />
</template>

<script setup>
import BarChart from '@/components/BarChart/BarChart.vue';

const departments = ['技术研发', '市场销售', '人力资源', '财务管理', '客户服务'];
const chartData = [
  {
    name: '男性员工',
    values: [45, 32, 20, 18, 32]
  },
  {
    name: '女性员工',
    values: [15, 28, 30, 22, 28]
  }
];
</script>