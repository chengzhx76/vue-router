<template>
  <div id="demo">
    <button @click="btn">btn</button>
    <div id="charts" style="height: 500px; width: 100%"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import axios from 'axios'

  export default {

    data() {
      return {
        chart: null,
        seriesData: null
      }
    },
    mounted() {
      this.initChart()
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    watch: {
      seriesData(val) {
        console.log(val)
        this.chart.setOption(val)
//        this.chart.setOption({series:val})
      }
    },
    methods: {
      initChart() {
        this.chart = echarts.init(document.getElementById('charts'))

        const xAxisData = []
        const data = []
        for (let i = 0; i < 30; i++) {
          xAxisData.push(i + '号')
          data.push(Math.round(Math.random() * 2 + 3))
        }

        this.chart.setOption(
          {
            backgroundColor: '#08263a',
            tooltip: {
              trigger: 'axis'
            },
            xAxis: {
              show: false,
              data: xAxisData
            },
            visualMap: {
              show: false,
              min: 0,
              max: 50,
              dimension: 0,
              inRange: {
                color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
              }
            },
            yAxis: {
              axisLine: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  color: '#4a657a'
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#08263f'
                }
              },
              axisTick: {}
            },
            series: [{
              type: 'bar',
              data,
              name: '撸文数',
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  shadowBlur: 10,
                  shadowColor: '#111'
                }
              },
              animationEasing: 'elasticOut',
              animationEasingUpdate: 'elasticOut',
              animationDelay(idx) {
                return idx * 20
              },
              animationDelayUpdate(idx) {
                return idx * 20
              }
            }]
          }
        )
      },
      btn() {
        console.log("点击事件")
        const self = this
        axios.get("/charts").then((response)=>{
          let res = response.data;
          console.log("sssssssss")
          self.seriesData = res;
        });
      }
    }
  }

</script>
