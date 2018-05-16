<template>
  <div class="getScore">
    <div class="score">{{score}}</div>
    <div>
       赵有志{{viewTip}}
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      score: 0,
      rightAnswer: [2, 7, 12, 13, 18],
      tips: ["菜鸡", "渣渣", "凑合", "不错", "厉害", "666"],
      viewTip: ""
    };
  },
  computed: mapState(["answerId"]),

  methods: {
    getScore() {
      this.answerId.forEach((item, index) => {
        if (item == this.rightAnswer[index]) {
          this.score += 20;
        }
      });
    },
    getTips() {
      switch (this.score) {
        case 0:
          return (this.viewTip = this.tips[0]);
          break;
        case 20:
          return (this.viewTip = this.tips[1]);
          break;
        case 40:
          return (this.viewTip = this.tips[2]);
          break;
        case 60:
          return (this.viewTip = this.tips[3]);
          break;
        case 80:
          return (this.viewTip = this.tips[4]);
          break;
        case 100:
          return (this.viewTip = this.tips[5]);
          break;
      }
    }
  },
  created() {
    this.getScore();
    this.getTips();
  }
};
</script>


<style>

.getScore{
     width:4rem;
    height:4rem;
    background: url("../../../static/img/4-2.png")top center no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 2.2rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    color: brown;
    text-align: center;
    font-size: 26px;

}

.score{
  margin-top: 2rem;
}
</style>
