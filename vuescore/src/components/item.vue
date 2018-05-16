<template>
  <div>
      <header>
        <div v-if="fatherTitle=='home'" class="tit_tip">{{itemDetail[0].active_topic_phase}}</div>
        <div v-if="fatherTitle=='item'"  class="tit_tip">{{itemDetail[item_num-1].topic_name}}</div>
      </header>
      <div class="content">
        <div class="bgImg" v-if="fatherTitle=='home'"></div>
        <div class="answer" v-if="fatherTitle=='item'">
           <ul>
            <li class="text" v-for="item,index in itemDetail[item_num-1].topic_answer" > 
                   <span class="ready_choose" :class="{has_choose:select==index}" @click="choosed(index,item.topic_answer_id)">{{choose(index)}}</span> 
                   {{item.answer_name}}
             </li>
           </ul>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="btn">
        <div v-if="fatherTitle=='home'"  >
          <router-link to="/item" class="btn_start"></router-link>
        </div>

          <div v-if="fatherTitle=='item'" >
            <div v-if="item_num<itemDetail.length" class="btn_next" @click="nextItem"></div>
            <div v-else  class="btn_all" @click="submit"></div>
          </div>
         
      </div>

  </div>
</template>

<script>
import "../css/common";
import { mapState, mapMutations, Action, mapActions } from "vuex";

export default {
  name: "home",
  props: ["fatherTitle"],
  computed: mapState(["itemDetail", "item_num"]),
  data() {
    return {
      select: null,
      choosedId: null
    };
  },
  methods: {
    ...mapActions(["addNum", "initData"]),
    choose: type => {
      switch (type) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
      }
    },
    choosed(index, id) {
      this.select = index;
      this.choosedId = id;
    },
    nextItem() {
      if (this.choosedId != null) {
        this.addNum(this.choosedId);
        this.choosedId = null;
        this.select = null;
      } else {
        alert("请选择答案");
      }
    },
    submit(){
        if (this.choosedId != null) {
        this.addNum(this.choosedId);
        this.choosedId = null;
        this.select = null;
        this.$router.push('score')
      } else {
        alert("请选择答案");
      }
    }
  },
  created(){
    this.initData()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
