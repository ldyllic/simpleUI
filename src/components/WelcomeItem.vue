<template>
  <div class="dashboard">
    <h1>销售数据饼图分析</h1>
    <div class="controls">
      <button @click="chartType = 'pie'" :class="{ active: chartType === 'pie' }">饼图</button>
      <button @click="chartType = 'ring'" :class="{ active: chartType === 'ring' }">环形图</button>
      <button @click="chartType = 'rose'" :class="{ active: chartType === 'rose' }">玫瑰图</button>
      <button @click="theme = theme === 'light' ? 'dark' : 'light'">切换主题</button>
    </div>
    
    <div class="charts-container">
      <div class="chart-box">
        <h3>产品销售占比</h3>
        <PieChart 
          :data="salesData"
          title="产品销售分布"
          :type="chartType"
          :theme="theme"
          :showLabel="true"
          :legend="true"
          height="400px"
          @click="handleChartClick"
        />
      </div>
      
      <div class="chart-box">
        <h3>地区销售占比</h3>
        <PieChart 
          :data="regionData"
          title="地区销售分布"
          :type="chartType"
          :theme="theme"
          :showLabel="true"
          :legend="{ position: 'right' }"
          height="400px"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PieChart from './PieChart/PieChart.vue';

// 图表数据
const salesData = ref([
  { name: '电子产品', value: 1230 },
  { name: '服装配饰', value: 980 },
  { name: '家用电器', value: 760 },
  { name: '美妆护肤', value: 450 },
  { name: '食品饮料', value: 890 }
]);

const regionData = ref([
  { name: '华东地区', value: 1820 },
  { name: '华北地区', value: 1050 },
  { name: '华南地区', value: 980 },
  { name: '西南地区', value: 670 },
  { name: '西北地区', value: 420 },
  { name: '东北地区', value: 350 }
]);

// 图表类型控制
const chartType = ref('pie');
const theme = ref('light');

// 处理图表点击事件
const handleChartClick = (event) => {
  console.log(`点击了 ${event.type} 事件`);
  console.log('数据项:', event.data);
  
  // 可以在这里实现更复杂的交互逻辑，如：
  // - 显示详细信息
  // - 跳转到其他页面
  // - 更新其他相关组件
};
</script>

<style>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  color: var(--text-color, #333);
  text-align: center;
  margin-bottom: 30px;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
}

.controls button {
  padding: 8px 16px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.controls button:hover {
  background: #e0e0e0;
}

.controls button.active {
  background: #3498db;
  color: white;
  border-color: #2980b9;
}

.charts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  gap: 25px;
}

.chart-box {
  background: var(--box-bg, white);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s;
}

.chart-box:hover {
  transform: translateY(-5px);
}

h3 {
  color: var(--text-color, #2c3e50);
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>