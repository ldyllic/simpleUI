<template>
  <div>
    <PieChart 
      :data="trafficData" 
      height="350px"
      :legend="false"
      :showLabel="true"
      type="ring"
    />
  </div>
</template>

<script setup>
import PieChart from '@/components/PieChart/PieChart.vue';

const trafficData = [
  { name: '直接访问', value: 1450 },
  { name: '搜索引擎', value: 850 },
  { name: '社交媒体', value: 680 },
  { name: '邮件营销', value: 420 },
  { name: '广告推广', value: 300 }
];
</script>