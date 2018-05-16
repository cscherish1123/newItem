<template>
  <div>
     <div class="wrap">
       <!-- 动态绑定btn  :btn -->
          <custom :list="arr" :btn="'搜索'"></custom>
          <custom :list="arr" :btn="'查询'"></custom>
          <custom-list></custom-list>
     </div>
  </div>
</template>

<script>
import Vue from "vue";
Vue.component("custom", {
  props: ["btn", "list"],
  template: `<div>
                    <input type = "text" v-model="msg" />
                    <input type = "button"  :value="btn"/>
                   <custom-list :lists="list" @recieve="get"></custom-list>
              </div>`,
  data() {
    return{
       msg: "",
    }
  },
  methods: {
    get(val) {
      this.msg = val;
    }
  }
});
Vue.component("custom-list", {
  props: ["lists"],
  template: `<div>
                 <ul><li v-for="item in lists" @click="send(item)">{{item}}</li></ul>
              </div>`,
  methods: {
    send(item) {
      this.$emit("recieve", item);
    }
  }
});
export default {
  data() {
    return {
      arr: ["java", "python", "php"]
    };
  }
};
</script>
