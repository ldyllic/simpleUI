<template>
  <div ref="chartContainer" class="line-chart-container" :style="{ height: containerHeight }">
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"></div>
    </div>
    <div v-else-if="isEmpty" class="empty-state">
      <svg class="empty-icon" viewBox="0 0 24 24">
        <path fill="currentColor" d="M5,5V19H19V5H5M6,6H18V18H6V6M9,9V15L12.5,12L9,9M10,10.5L11.5,12L10,13.5V10.5Z" />
      </svg>
      <p>暂无数据</p>
    </div>
    <div ref="chartElement" class="line-chart" :style="{ height: height }"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { useResizeObserver } from '@vueuse/core';

// 组件属性
const props = defineProps({
  // 图表数据
  data: {
    type: Array,
    default: () => [],
    required: true,
    validator: (data) => {
      return data.every(item => item.name && Array.isArray(item.values));
    }
  },
  
  // X轴数据
  xAxisData: {
    type: Array,
    default: () => [],
    required: true
  },
  
  // 图表标题
  title: {
    type: String,
    default: ''
  },
  
  // 图表高度
  height: {
    type: [String, Number],
    default: '400px'
  },
  
  // 容器高度
  containerHeight: {
    type: [String, Number],
    default: ''
  },
  
  // 主题 ('light' 或 'dark')
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  
  // 折线图类型 ('line' 或 'smooth' 或 'step')
  type: {
    type: String,
    default: 'line',
    validator: (value) => ['line', 'smooth', 'step'].includes(value)
  },
  
  // 是否显示图例
  showLegend: {
    type: Boolean,
    default: true
  },
  
  // 是否显示标签
  showLabel: {
    type: Boolean,
    default: false
  },
  
  // 是否显示提示框
  showTooltip: {
    type: Boolean,
    default: true
  },
  
  // 是否显示网格线
  showGrid: {
    type: Boolean,
    default: true
  },
  
  // 是否显示坐标轴
  showAxis: {
    type: Boolean,
    default: true
  },
  
  // 是否显示数据点
  showSymbol: {
    type: Boolean,
    default: true
  },
  
  // 是否显示面积图
  showArea: {
    type: Boolean,
    default: false
  },
  
  // 自定义颜色数组
  colors: {
    type: Array,
    default: () => [
      '#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE',
      '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC'
    ]
  },
  
  // 是否显示加载状态
  loading: {
    type: Boolean,
    default: false
  },
  
  // 是否启用动画
  animation: {
    type: Boolean,
    default: true
  },
  
  // Y轴最小值
  yMin: {
    type: Number,
    default: null
  },
  
  // Y轴最大值
  yMax: {
    type: Number,
    default: null
  },
  
  // 是否启用数据缩放
  dataZoom: {
    type: Boolean,
    default: false
  }
});

// 事件发射器
const emit = defineEmits(['click', 'init']);

// 图表引用
const chartContainer = ref(null);
const chartElement = ref(null);
let chartInstance = null;

// 图表是否为空状态
const isEmpty = computed(() => props.data.length === 0 || props.xAxisData.length === 0);

// 初始化图表
const initChart = () => {
  if (!chartElement.value || isEmpty.value) return;
  
  // 销毁旧实例
  if (chartInstance) {
    chartInstance.dispose();
  }
  
  // 使用主题配置初始化图表实例
  const theme = props.theme === 'dark' ? 'dark' : null;
  chartInstance = echarts.init(chartElement.value, theme);
  
  // 准备图表配置
  const chartOptions = getChartOptions();
  
  // 设置图表配置
  chartInstance.setOption(chartOptions);
  
  // 绑定事件
  bindEvents();
  
  // 发出初始化完成事件
  emit('init', chartInstance);
};

// 获取图表配置
const getChartOptions = () => {
  return {
    title: {
      text: props.title,
      left: 'center',
      textStyle: {
        color: props.theme === 'dark' ? '#fff' : '#333',
        fontWeight: 'bold',
        fontSize: 18
      }
    },
    tooltip: props.showTooltip ? {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      },
      backgroundColor: props.theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
      borderColor: props.theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
      textStyle: {
        color: props.theme === 'dark' ? '#fff' : '#333'
      }
    } : undefined,
    legend: props.showLegend ? {
      data: props.data.map(item => item.name),
      textStyle: {
        color: props.theme === 'dark' ? '#eee' : '#333'
      },
      bottom: 0
    } : undefined,
    grid: {
      left: '3%',
      right: '4%',
      bottom: props.showLegend ? '10%' : '3%',
      top: props.title ? '15%' : '10%',
      containLabel: true
    },
    xAxis: props.showAxis ? {
      type: 'category',
      boundaryGap: false,
      data: props.xAxisData,
      axisLine: {
        lineStyle: {
          color: props.theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : '#ccc'
        }
      },
      axisLabel: {
        color: props.theme === 'dark' ? '#eee' : '#666'
      },
      splitLine: props.showGrid ? {
        show: true,
        lineStyle: {
          color: props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#eee'
        }
      } : undefined
    } : undefined,
    yAxis: props.showAxis ? {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: props.theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : '#ccc'
        }
      },
      axisLabel: {
        color: props.theme === 'dark' ? '#eee' : '#666'
      },
      splitLine: props.showGrid ? {
        show: true,
        lineStyle: {
          color: props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#eee'
        }
      } : undefined,
      min: props.yMin,
      max: props.yMax
    } : undefined,
    dataZoom: props.dataZoom ? [
      {
        type: 'inside',
        start: 0,
        end: 100
      },
      {
        type: 'slider',
        start: 0,
        end: 100
      }
    ] : undefined,
    series: props.data.map((item, index) => ({
      name: item.name,
      type: 'line',
      data: item.values,
      smooth: props.type === 'smooth',
      step: props.type === 'step' ? 'start' : false,
      symbol: props.showSymbol ? 'circle' : 'none',
      symbolSize: 8,
      itemStyle: {
        color: item.color || props.colors[index % props.colors.length]
      },
      areaStyle: props.showArea ? {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: item.color || props.colors[index % props.colors.length] },
          { offset: 1, color: props.theme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)' }
        ])
      } : undefined,
      label: props.showLabel ? {
        show: true,
        position: 'top',
        color: props.theme === 'dark' ? '#fff' : '#333'
      } : undefined,
      animation: props.animation
    })),
    // 数据为空时的占位符
    graphic: isEmpty.value ? [{
      type: 'text',
      left: 'center',
      top: 'center',
      style: {
        text: '暂无数据',
        fontSize: 14,
        fill: props.theme === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)'
      }
    }] : undefined
  };
};

// 绑定图表事件
const bindEvents = () => {
  if (!chartInstance) return;
  
  // 点击事件
  chartInstance.on('click', (params) => {
    emit('click', {
      type: 'click',
      data: params.data,
      name: params.seriesName,
      index: params.dataIndex,
      category: props.xAxisData[params.dataIndex]
    });
  });
};

// 响应式监听容器大小变化
useResizeObserver(chartContainer, () => {
  if (chartInstance) {
    chartInstance.resize();
  }
});

// 监听数据变化
watch(() => [props.data, props.xAxisData], () => {
  if (chartInstance && !props.loading) {
    chartInstance.setOption(getChartOptions());
  }
}, { deep: true });

// 监听主题变化
watch(() => props.theme, (newTheme) => {
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = echarts.init(chartElement.value, newTheme === 'dark' ? 'dark' : null);
    chartInstance.setOption(getChartOptions());
    bindEvents();
  }
});

// 监听type变化
watch(() => props.type, () => {
  initChart();
});

// 监听loading状态变化
watch(() => props.loading, (isLoading) => {
  if (!isLoading && chartElement.value && isEmpty.value === false) {
    initChart();
  }
});

// 挂载时初始化图表
onMounted(() => {
  if (!props.loading) {
    initChart();
  }
});

// 组件卸载前清理
onUnmounted(() => {
  if (chartInstance) {
    chartInstance.dispose();
  }
});
</script>

<style scoped>
.line-chart-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.line-chart {
  width: 100%;
  min-height: 300px;
  transition: opacity 0.3s ease;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.empty-state {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 5;
  color: #999;
}

.empty-icon {
  width: 64px;
  height: 64px;
  opacity: 0.3;
  margin-bottom: 16px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>