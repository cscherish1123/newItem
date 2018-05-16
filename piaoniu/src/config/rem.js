(function(doc,win){
    var docEl = document.documentElement,
        // 翻转事件   orientationchange 是否翻转  
        resize ='orientationchange' in window? 'orientationchange':'resize'

        var recalc = function(){
            var clientwidth = docEl.clientWidth
            // console.log(clientwidth)
            if(!clientwidth) return
            docEl.style.fontSize=180*(clientwidth/640)+"px"
            // console.log(clientwidth)
        }
      
        if(!doc.addEventListener) return;
        
        win.addEventListener(resize,recalc,false),
        // DOMContendLoaded  浏览器内部加载执行
        doc.addEventListener("DOMContentLoaded",recalc,false)

        //   console.log(win)
      
})(document,window)