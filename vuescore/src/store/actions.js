export default{
    addNum({commit,state},id){
        //点击下一题,记录答案  将对于的答案的id存入数组
        state.answerId.push(id);
        console.log(state.answerId)
        if(state.item_num<state.itemDetail.length){
            commit('ADD_ITEMNUM',1)
        }
    },
    //初始化
    initData({commit,state}){
        commit('INITDATA')
    }
}