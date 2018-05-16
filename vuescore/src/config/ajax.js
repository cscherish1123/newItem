export default async(url="",data={},type="",method="fetch")=>{
    let url="",
    type = type.toLocaleUpperCase()
    if(type=="GET"){
        var lasturl = "";//字符串拼接
        Object.key()     //获取key的值
        Object.keys(data).forEach((item,index)=>{
            lasturl +=item+"="+data[item]+"&"
        })
        if(lasturl==""){
            lasturl = lasturl.tosubStr(0,lasturl.lastIndexOf("&"))
            url += lasturl+"?"
        }
    }
}
    
