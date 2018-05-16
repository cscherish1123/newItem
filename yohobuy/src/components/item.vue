<template>
  <div>
        <!-- list -->
     <div class="icon">
     <ul class="icon_list">
       <li>
        <img src="//img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01ae835d5ae6d9502818daf351ad2db6cf.png?imageView2/2/w/98/h/98/q/60" alt="">
        <span class="linkBar">新品到着</span>
       </li>
       <li>
        <img src="//img11.static.yhbimg.com/yhb-img01/2017/02/03/09/011004f5a04caaf9c18d7848049a75981e.png?imageView2/2/w/98/h/98/q/60" alt="">
        <span class="linkBar">人气搭配</span>
       </li>
       <li>
        <img src="//img11.static.yhbimg.com/yhb-img01/2017/02/03/09/01d35157ab5942ea40b4f08a11c1680a17.png?imageView2/2/w/98/h/98/q/60" alt="">
        <span class="linkBar">折扣专门</span>
       </li>
       <li>
        <img src="//img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01b097e06ac9fc78bbcc3d3e0dfbe01fcc.png?imageView2/2/w/98/h/98/q/60" alt="">
        <span class="linkBar">全部分类</span>
       </li>
     </ul>
     </div>
     <!-- list -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.icon {
  padding: 0.2rem 0.2rem;
  background: #fff;
}
.icon .icon_list {
  width: 100%;
  height: 1rem;
}
.icon .icon_list li {
  width: 25%;
  height: 1rem;
  float: left;
  /* background: black; */
  position: relative;
}
.icon_list li img {
  position: absolute;
  height: 0.6rem;
  width: 0.6rem;
  top: 2%;
  left: 25%;
}

.icon_list li .linkBar {
  font-size: 12px;
  position: absolute;
  bottom: 2%;
  display: block;
  left: 18%;
}

</style>
