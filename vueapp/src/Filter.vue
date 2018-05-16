// 过滤器

<template>
<div id='app'>
        <!-- {{msg|uppercase}} -->
        <p>{{a |cal(19,20)}}</p>

    </div>  
</template>

<script>


export default {
    name:"filters",
    data(){
        return{
            msg:"abc",
            a:1
        }
    }
  
}
</script>

