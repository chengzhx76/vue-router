var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send(chartData());
});

module.exports = router;

function getData() {
  return {
    opinion: opinion(),
    opinionData: opinionData()
  }
}

function chartData() {
  return {
    backgroundColor: '#08263a',
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      show: false,
      data: getXAxisData()
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
      data: getData(),
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
}

function getXAxisData() {
  let xAxisData = []
  for (let i = 0; i < 80; i++) {
    xAxisData.push(i + '号')
  }
  return xAxisData;
}

function getData() {
  let data = []
  for (let i = 0; i < 80; i++) {
    data.push(Math.round(Math.random() * 2 + 3))
  }
  return data;
}

function opinionData() {
  return [
    {value:335, name:'直接访问'},
    {value:310, name:'邮件营销'},
    {value:234, name:'联盟广告'},
    {value:135, name:'视频广告'},
    {value:1548, name:'搜索引擎'}
  ]
}
function opinion() {
  return ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
}
