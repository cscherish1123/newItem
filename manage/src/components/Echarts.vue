<template>
  <div class="photo_cont">
      <div id="chart01" :style="{width: '300px', height: '300px'}"></div>
      <div id="chart02" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOne: "",
      chartTwo:""
    };
  },


  methods: {
    drawLine() {
      let chartOne = this.$echarts.init(document.getElementById("chart01"));
      chartOne.setOption({
        //   提示信息
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%" //   悬浮框数据
        },

        // 工具箱
        toolbox: {
          show: true,
          feature: {
            mark: { show: true } //标记
          }
        },

        // 数据
        series: [
          {
            name: "业务指标",
            type: "gauge",
            detail: { formatter: "{value}%" },
            data: [{ value: 50, name: "比例" }]
          }
        ]
      });

      // clearInterval(timeTicket);
      // timeTicket = setInterval(function() {
      //   option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
      //   myChart.setOption(option, true);
      // }, 2000);
    },
    drawLine2() {
      let chartTwo = this.$echarts.init(document.getElementById("chart02"));
      chartTwo.setOption({
        title: {
          text: "考试通过率",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
          // show: true,
          feature: {
            // mark: { show: true },
            // dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"],
              option: {
                funnel: {
                  x: "25%",
                  width: "50%",
                  funnelAlign: "left",
                  max: 1548
                }
              }
            }
          }
        },
        calculable: true,
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "未通过" },
              { value: 310, name: "已通过" }
            ]
          }
        ]
      });
      // clearInterval(timeTicket);
      // timeTicket = setInterval(function() {
      //   option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
      //   myChart.setOption(option, true);
      // }, 2000);
    }
  },
    mounted() {
    this.drawLine();
    this.drawLine2()
  }
};
</script>

<style>
.photo_cont{
  background: #8480A3;
  width:100%;
  margin: 0 auto;
  height: 300px;
}

#chart01,#chart02{
  background: #fff;
   margin:0 200px;
  float: left;
}

</style>
