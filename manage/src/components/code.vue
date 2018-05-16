<template>
  <div>
      <canvas id="canvas" width="100" height="35" @click="change"></canvas>
  </div>
</template>

<script>
/**
 * 绘制环境
 *
 * 1.绘制矩形
 * 1.1 rect() x y w h
 * 1.2 填充颜色 fillstyle=""
 *
 * 2.绘制小点
 * 2.1 arc() x y o r
 *
 * 3.绘制干扰线
 * line
 *
 * 4.绘制文字
 * font
 *
 */

export default {
  data() {
    return {
      canvas: "",
      width: "",
      height: "",
      ctx: "",
      // txt: ""
    };
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    randomColor(min, max) {
      var r = this.randomNum(min, max);
      var g = this.randomNum(min, max);
      var b = this.randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    change() {
      // Axios:({
      //     url:"",
      //     method:'get',

      // }).then(res=>{

      // })
      this.$axios({
        url: "api/Handler/AdminLoginHandler?action=veri",
        method: "get"
      }).then(res => {
        console.log(res.data.data);
            this.drawPic( res.data.data);
      });
  
    },
    drawPic(txt) {
      // 绘制矩形
      this.ctx.fillStyle = this.randomColor(100, 150);
      // console.log(this.canvas);
      this.ctx.fillRect(0, 0, this.width, this.height);

      //绘制干扰线
      for (var i = 0; i < 10; i++) {
        this.ctx.strokeStyle = this.randomColor(50, 100);
        this.ctx.beginPath();
        this.ctx.moveTo(
          this.randomNum(0, this.width),
          this.randomNum(0, this.height)
        );
        this.ctx.lineTo(
          this.randomNum(0, this.width),
          this.randomNum(0, this.height)
        );
        this.ctx.lineWidth = 1;
        this.ctx.closePath();
        this.ctx.stroke();
      }
      //绘制干扰点
      for (var i = 0; i < 50; i++) {
        this.ctx.fillStyle = this.randomColor(80, 150);
        this.ctx.beginPath();
        this.ctx.arc(
          this.randomNum(0, this.width),
          this.randomNum(0, this.height),
          1.5,
          0,
          2 * Math.PI,
          false
        );
        this.ctx.fill();
        this.ctx.closePath();
      }

      //绘制文字
      // var str = "";
      for (var i = 0; i < 4; i++) {
        // var txt = str[this.randomNum(0, str.length)];
        this.ctx.fillStyle = this.randomColor(0, 40);
        var text = txt[i];
        this.ctx.beginPath();
        this.ctx.font = this.randomNum(16, 30) + "px SimHei";
        var x = 20 + i * 20;
        var y = this.randomNum(15, 32); //y轴随机生成的区间
        var deg = this.randomNum(-30, 30);
        // this.ctx.translate(x, y);
        // this.ctx.rotate(deg * Math.PI / 180);  //转为弧度
        this.ctx.fillText(text, x, y);
        //恢复坐标原点和旋转角度
        // this.ctx.rotate(-deg * Math.PI / 180);
        // this.ctx.translate(-x, -y);
        this.ctx.closePath();
      }
    }
  },
  mounted() {
    // console.log(this.randomColor(0, 255));
    this.canvas = document.getElementById("canvas");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ctx = this.canvas.getContext("2d");
    this.change();
  }
};
</script>

<style>

</style>
