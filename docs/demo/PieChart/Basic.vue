<template>
  <PieChart 
    title="产品销售分布" 
    :data="salesData"
    height="400px"
  />
</template>

<script setup>
import PieChart from '@/components/PieChart/PieChart.vue';

const salesData = [
  { name: '电子产品', value: 1230 },
  { name: '服装配饰', value: 980 },
  { name: '家用电器', value: 760 },
  { name: '美妆护肤', value: 450 },
  { name: '食品饮料', value: 890 }
];
</script>