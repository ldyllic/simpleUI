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
      <PieChart 
        title="月度支出分布" 
        :data="expensesData"
        :theme="theme"
        height="350px"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button/Button.vue'
import PieChart from '@/components/PieChart/PieChart.vue';

const theme = ref('light');

const expensesData = [
  { name: '住房', value: 3200 },
  { name: '饮食', value: 1800 },
  { name: '交通', value: 800 },
  { name: '购物', value: 600 },
  { name: '娱乐', value: 400 },
  { name: '医疗', value: 300 }
];
</script>