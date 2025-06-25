<template>
  <div>
    <Button @click="loading = !loading">
      {{ loading ? '关闭加载' : '开启加载' }}
    </Button>
    
    <BarChart 
      title="区域销售数据"
      :data="chartData"
      :xAxisData="regions"
      :loading="loading"
      height="350px"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button/Button.vue'
import BarChart from '@/components/BarChart/BarChart.vue';

const loading = ref(true);
const regions = ['华东', '华北', '华南', '西南', '西北', '东北'];
const chartData = [
  {
    name: '2023年',
    values: [1450, 1200, 1350, 850, 500, 450]
  }
];
</script>