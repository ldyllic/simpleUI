<template>
  <div class="line-type-demo">
    <h2>折线图类型展示</h2>
    <div class="controls">
      <Button
        @click="type = 'line'" 
        :type="type === 'line' ? 'primary' : ''"
      >
        普通折线图
      </Button>
      <Button
        @click="type = 'smooth'" 
        :type="type === 'smooth' ? 'primary' : ''"
      >
        平滑曲线图
      </Button>
      <Button
        @click="type = 'step'" 
        :type="type === 'step' ? 'primary' : ''"
      >
        阶梯线图
      </Button>
    </div>
    
    <div class="chart-container">
      <div class="chart-item">
        <h3>用户注册趋势</h3>
        <LineChart 
          title="用户注册趋势"
          :data="userData"
          :xAxisData="months"
          :type="type"
          height="300px"
        />
      </div>
      
      <div class="chart-item">
        <h3>网站流量变化</h3>
        <LineChart 
          title="网站流量变化"
          :data="trafficData"
          :xAxisData="weeks"
          :type="type"
          height="300px"
          :showArea="true"
        />
      </div>
    </div>
    
    <div class="type-description">
      <h3>当前类型: {{ typeNames[type] }}</h3>
      <p>{{ typeDescriptions[type] }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button/Button.vue'
import LineChart from '@/components/LineChart/LineChart.vue';

// 折线图类型控制
const type = ref('line');

// 月份数据
const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

// 用户数据
const userData = [
  {
    name: '2022年注册用户',
    values: [3500, 4200, 3800, 5000, 6200, 7500, 8800, 7900, 8500, 9000, 9200, 9800]
  },
  {
    name: '2023年注册用户',
    values: [4200, 4800, 5200, 6100, 7400, 8700, 9500, 9200, 10000, 11000, 11500, 12000]
  }
];

// 周数据
const weeks = ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周'];

// 流量数据
const trafficData = [
  {
    name: '网站访问量(PV)',
    values: [45000, 52000, 48000, 60000, 74000, 85000]
  },
  {
    name: '独立访客(UV)',
    values: [15000, 18500, 17200, 21000, 24500, 28000]
  }
];

// 类型名称映射
const typeNames = {
  line: '普通折线图',
  smooth: '平滑曲线图',
  step: '阶梯线图'
};

// 类型描述映射
const typeDescriptions = {
  line: '最基础的折线图类型，以直线段连接各数据点。适用于展示数据的变化趋势，特别适合显示数据点之间连续的、平滑的变化。在财务分析、销售统计等场景中广泛应用。',
  smooth: '使用贝塞尔曲线连接各数据点，形成平滑的曲线。适用于展示数据的变化趋势，能更好地显示数据的波动情况。常用于展示自然现象的变化趋势，如温度变化、流量波动等。',
  step: '以阶梯状的方式连接各数据点，形成阶梯状的折线图。适用于展示数据的阶段性变化，或者在特定时间点发生变化的数据。常用于展示库存变化、阶梯计价等信息。'
};
</script>

<style scoped>
.line-type-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.chart-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

.chart-item {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s;
}

.chart-item:hover {
  transform: translateY(-5px);
}

h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #2c3e50;
  text-align: center;
}

.type-description {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  border-left: 4px solid #3498db;
}

.type-description h3 {
  margin-top: 0;
  color: #3498db;
}

.type-description p {
  line-height: 1.6;
  color: #555;
}
</style>