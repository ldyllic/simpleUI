<template>
  <div ref="chartContainer" class="pie-chart-container" :style="{ height: containerHeight }">
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"></div>
    </div>
    <div v-else-if="isEmpty" class="empty-state">
      <svg class="empty-icon" viewBox="0 0 24 24">
        <path fill="currentColor" d="M5,5V19H19V5H5M6,6H18V18H6V6M9,9V15L12.5,12L9,9M10,10.5L11.5,12L10,13.5V10.5Z" />
      </svg>
      <p>暂无数据</p>
    </div>
    <div ref="chartElement" class="pie-chart" :style="{ height: height }"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { useResizeObserver } from '@vueuse/core';

// 组件属性
const props = defineProps({
  // 图表数据，格式: [{ name: '类别1', value: 100 }]
  data: {
    type: Array,
    default: () => [],
    required: true,
    validator: (data) => {
      return data.every(item => item.name && !isNaN(item.value));
    }
  },
  
  // 图表标题
  title: {
    type: String,
    default: ''
  },
  
  // 图表高度 (像素或百分比)
  height: {
    type: [String, Number],
    default: '400px'
  },
  
  // 容器高度 (当需要固定容器高度时使用)
  containerHeight: {
    type: [String, Number],
    default: ''
  },
  
  // 主题颜色，可选 'light' 或 'dark'
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  
  // 饼图类型: 'pie'(普通饼图), 'ring'(环形饼图), 'rose'(南丁格尔玫瑰图)
  type: {
    type: String,
    default: 'pie',
    validator: (value) => ['pie', 'ring', 'rose'].includes(value)
  },
  
  // 饼图半径 (可传入数组 [内半径, 外半径])
  radius: {
    type: [Number, String, Array],
    default: '75%'
  },
  
  // 饼图中心位置 [横向位置, 纵向位置]
  center: {
    type: Array,
    default: () => ['50%', '50%']
  },
  
  // 图例配置 (false: 隐藏, true: 显示, object: 自定义配置)
  legend: {
    type: [Boolean, Object],
    default: true
  },
  
  // 是否显示标签
  showLabel: {
    type: Boolean,
    default: true
  },
  
  // 标签配置
  label: {
    type: Object,
    default: () => ({
      formatter: '{b}: {d}%'
    })
  },
  
  // 是否显示提示工具
  showTooltip: {
    type: Boolean,
    default: true
  },
  
  // 自定义颜色数组
  colors: {
    type: Array,
    default: () => [
      '#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE',
      '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC'
    ]
  },
  
  // 是否展示加载状态
  loading: {
    type: Boolean,
    default: false
  },
  
  // 是否展示点击动画效果
  rippleEffect: {
    type: Boolean,
    default: true
  }
});

// 事件发射器
const emit = defineEmits(['click', 'init']);

// 图表引用
const chartContainer = ref(null);
const chartElement = ref(null);
let chartInstance = null;

// 图表是否为空状态
const isEmpty = computed(() => props.data.length === 0);

// 计算饼图半径
const computedRadius = computed(() => {
  // 如果是环形图类型，设置内外半径
  if (props.type === 'ring') {
    return ['45%', '75%'];
  }
  
  // 如果是玫瑰图，设置较小的半径和较大的内半径
  if (props.type === 'rose') {
    return ['30%', '75%'];
  }
  
  // 如果是自定义数组，直接返回
  if (Array.isArray(props.radius)) {
    return props.radius;
  }
  
  // 普通饼图返回单个半径值
  return props.radius;
});

// 玫瑰图特殊配置
const computedRoseType = computed(() => props.type === 'rose' ? 'radius' : 'area');

// 计算实际数据（添加默认颜色）
const computedData = computed(() => {
  return props.data.map((item, index) => ({
    ...item,
    // 如果数据项没有颜色，使用预定义颜色循环
    itemStyle: {
      color: item.color || props.colors[index % props.colors.length]
    }
  }));
});

// 初始化图表
const initChart = () => {
  if (!chartElement.value || isEmpty.value) return;
  
  // 如果已有图表实例，销毁它
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
    animation: true,
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
      trigger: 'item',
      backgroundColor: props.theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
      borderColor: props.theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
      textStyle: {
        color: props.theme === 'dark' ? '#fff' : '#333'
      },
      formatter: (params) => {
        const { name, value, percent } = params;
        return `${name}<br>数值: ${value}<br>占比: ${percent}%`;
      }
    } : undefined,
    legend: getLegendConfig(),
    color: props.colors,
    series: [
      {
        name: props.title || '图表',
        type: 'pie',
        radius: computedRadius.value,
        center: props.center,
        data: computedData.value,
        // 玫瑰图特殊配置
        roseType: props.type === 'rose' ? 'radius' : undefined,
        label: getLabelConfig(),
        // 高亮状态配置
        emphasis: props.rippleEffect ? {
          scale: true,
          scaleSize: 10,
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        } : undefined
      }
    ],
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

// 获取图例配置
const getLegendConfig = () => {
  if (!props.legend) return undefined;
  
  const baseConfig = {
    orient: 'horizontal',
    bottom: 10,
    left: 'center',
    itemWidth: 14,
    itemHeight: 14,
    textStyle: {
      color: props.theme === 'dark' ? '#eee' : '#333',
      fontSize: 12
    }
  };
  
  // 如果是自定义配置对象
  if (typeof props.legend === 'object') {
    return { ...baseConfig, ...props.legend };
  }
  
  // 默认图例配置
  return baseConfig;
};

// 获取标签配置
const getLabelConfig = () => {
  if (!props.showLabel) return undefined;
  
  const baseConfig = {
    show: true,
    position: 'outside',
    formatter: props.label.formatter,
    textStyle: {
      color: props.theme === 'dark' ? '#eee' : '#333',
      fontSize: 12
    }
  };
  
  // 环形图标签线配置
  if (props.type === 'ring' || props.type === 'rose') {
    baseConfig.position = 'inner';
    baseConfig.formatter = props.label.formatter || '{b}: {c}';
    
    // 玫瑰图不需要标签线
    if (props.type === 'rose') {
      baseConfig.position = 'outside';
      baseConfig.formatter = props.label.formatter || '{b}: {c}';
      baseConfig.textStyle = {
        fontWeight: 'bold'
      };
    }
    
    return {
      ...baseConfig,
      labelLine: {
        show: false
      }
    };
  }
  
  // 完整饼图配置标签线
  return {
    ...baseConfig,
    labelLine: {
      show: true,
      length: 15,
      length2: 10,
      lineStyle: {
        width: 1,
        type: 'solid'
      }
    }
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
      name: params.name,
      index: params.dataIndex
    });
  });
  
  // 双击事件
  chartInstance.on('dblclick', (params) => {
    emit('click', {
      type: 'dblclick',
      data: params.data,
      name: params.name,
      index: params.dataIndex
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
watch(computedData, () => {
  if (chartInstance && !props.loading) {
    chartInstance.setOption({
      series: [{
        data: computedData.value
      }]
    });
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
.pie-chart-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.pie-chart {
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