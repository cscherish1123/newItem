<template>
  <div id="app">
    <div>{{msg}}</div>
    <button @click="change">改变</button>
  </div>
</template>
<script>
export default {
  name: "Life",
  data() {
    return {
      msg: 123555
    };
  },
  methods: {
    change() {
      this.msg = 124;
    }
  },

  beforeCreate() {
    console.group("-------------实例创建之前------------");
    console.log("%c%s","color:red","el:", this.$el);
    console.log("%c%s","color:red","data:", this.$el);
    console.log("%c%s","color:red","msg:", this.$el);
  },
  created() {
     console.group("-------------实例创建完成------------");
    console.log("%c%s","color:red","el:", this.$el);
    console.log("%c%s","color:red","data:", this.$el);
    console.log("%c%s","color:red","msg:", this.$el);
  },
  beforeMount() {
     console.group("-------------实例挂载之前------------");
    console.log("%c%s","color:red","el:", this.$el);
    console.log("%c%s","color:red","data:", this.$el);
    console.log("%c%s","color:red","msg:", this.$el);
  },
  mounted() {
    console.group("-------------实例已经挂载------------");
    console.log("%c%s","color:red","el:", this.$el);
    console.log("%c%s","color:red","data:", this.$el);
    console.log("%c%s","color:red","msg:", this.$el);
  },
  beforeUpdate() {
    console.group("-------------实例更新之前------------");
    console.log("%c%s","color:red","el:", this.$el);
    console.log("%c%s","color:red","data:", this.$el);
    console.log("%c%s","color:red","msg:", this.$el);
  },
  updated() {
     console.group("-------------实例已经更新------------");
    console.log("%c%s","color:red","el:", this.$el);
    console.log("%c%s","color:red","data:", this.$el);
    console.log("%c%s","color:red","msg:", this.$el);
  },
  beforeDestroy() {
    console.group("-------------实例销毁之前------------");
    console.log("%c%s","color:red","el:", this.$el);
    console.log("%c%s","color:red","data:", this.$el);
    console.log("%c%s","color:red","msg:", this.$el);
  },
  destroyed() {
    console.group("-------------实例已经销毁------------");
    console.log("%c%s","color:red","el:", this.$el);
    console.log("%c%s","color:red","data:", this.$el);
    console.log("%c%s","color:red","msg:", this.$el);
  }
};
</script>

