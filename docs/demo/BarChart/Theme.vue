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
      <BarChart 
        title="网站访问来源"
        :data="chartData"
        :xAxisData="sources"
        :theme="theme"
        height="350px"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button/Button.vue'
import BarChart from '@/components/BarChart/BarChart.vue';

const theme = ref('light');
const sources = ['直接访问', '搜索引擎', '社交媒体', '邮件营销', '联盟广告'];
const chartData = [
  {
    name: 'PC端',
    values: [320, 332, 301, 334, 390]
  },
  {
    name: '移动端',
    values: [220, 182, 191, 234, 290]
  }
];
</script>