<template>
  <div>
    <Button @click="loading = !loading">
      {{ loading ? '关闭加载' : '开启加载' }}
    </Button>
    
    <LineChart 
      title="网络流量监控"
      :data="chartData"
      :xAxisData="minutes"
      :loading="loading"
      height="350px"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button/Button.vue'
import LineChart from '@/components/LineChart/LineChart.vue';

const loading = ref(true);
const minutes = Array.from({ length: 60 }, (_, i) => `${i}分`);
const chartData = [
  {
    name: '下载速度',
    values: Array.from({ length: 60 }, () => Math.floor(Math.random() * 100) + 20)
  },
  {
    name: '上传速度',
    values: Array.from({ length: 60 }, () => Math.floor(Math.random() * 50) + 10)
  }
];
</script>