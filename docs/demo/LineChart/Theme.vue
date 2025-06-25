<template>
  <div>
    <div style="margin-bottom: 20px">
      <Button @click="theme = 'light'">浅色主题</Button>
      <Button @click="theme = 'dark'">深色主题</Button>
    </div>
    
    <div :style="{ 
      background: theme === 'dark' ? '#1a1a1a' : '#f5f7fa',
      padding: '20px',
      borderRadius: '8px'
    }">
      <LineChart 
        title="服务器负载监控"
        :data="chartData"
        :xAxisData="hours"
        :theme="theme"
        height="350px"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button/Button.vue'
import LineChart from '@/components/LineChart/LineChart.vue';

const theme = ref('light');
const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
const chartData = [
  {
    name: 'CPU使用率',
    values: [25, 30, 40, 35, 45, 60, 70, 75, 65, 55, 45, 35, 30, 25, 20, 25, 30, 45, 60, 70, 65, 55, 45, 35]
  },
  {
    name: '内存使用率',
    values: [40, 42, 45, 48, 50, 52, 55, 58, 60, 58, 55, 52, 50, 48, 45, 42, 40, 45, 50, 55, 60, 58, 55, 50]
  }
];
</script>