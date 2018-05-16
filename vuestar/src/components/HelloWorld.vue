<template>
  <div class="hello">
     <p class="all" >
<input type="radio" value="0" v-model="inputdata"/>
<span>★</span>

<input type="radio" value="1" v-model="inputdata" />
<span>★</span>

<input type="radio" value="2" v-model="inputdata" />

<span>★</span>

<input type="radio" value="3" v-model="inputdata" />
<span>★</span>

<input type="radio" value="4" v-model="inputdata" />
<span>★</span>

<input type="radio" value="5" v-model="inputdata" />
<span>★</span>

</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      inputdata: "0"
    };
  },
  watch: {
    inputdata(value) {
      console.log(value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all > input {
  opacity: 0;
  position: absolute;
  width: 2em;
  height: 2em;
  margin: 0;
} 
 .all > input:nth-of-type(1),
.all > span:nth-of-type(1) {
  display: none;
}
.all > span {
  font-size:2em;
  color: #ff0095;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
  display: inline-block;
  margin-top: -1%;
} 
 .all > input:checked ~ span {
  color: #666;
}
.all > input:checked + span {
  color: #ff0095;
}
</style>
