<template>
  <div class="chart-group">
    <div>
      <h3>普通饼图</h3>
      <PieChart :data="salesData" height="300px" />
    </div>
    <div>
      <h3>环形图</h3>
      <PieChart :data="salesData" type="ring" height="300px" />
    </div>
    <div>
      <h3>玫瑰图</h3>
      <PieChart :data="salesData" type="rose" height="300px" />
    </div>
  </div>
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

<style scoped>
.chart-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

h3 {
  text-align: center;
  margin: 10px 0;
}
</style>