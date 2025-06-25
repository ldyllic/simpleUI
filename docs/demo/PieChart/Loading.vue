<template>
  <div>
    <Button @click="toggleLoading">
      {{ loading ? '关闭加载' : '开启加载' }}
    </Button>
    
    <PieChart 
      title="用户来源分析" 
      :data="userSourceData"
      height="350px"
      :loading="loading"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button/Button.vue'
import PieChart from '@/components/PieChart/PieChart.vue';

const loading = ref(true);
const toggleLoading = () => {
  loading.value = !loading.value;
};

const userSourceData = [
  { name: '新用户注册', value: 2540 },
  { name: '老用户回访', value: 1840 },
  { name: '会员推荐', value: 760 },
  { name: '活动参与', value: 480 }
];
</script>