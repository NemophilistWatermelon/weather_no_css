# weather_no_css
 Jquery_JSONP 查询天气
## 运行结果图

![images](https://github.com/Keviniswhite/weather_no_css/blob/master/end.png)
## 实现介绍
- 首先打开weather.html文件
``引入了 tfjs.js 文件 ``  该文件主要用来操作Dom,绑定事件及相关用法
```引入了JQuery文件```  主要为了使用``JSONP``跨域
```js
      // 用于获取 dom 对象  获取了 input button 
      getEles()  
      // 用于创建查询天气后返回的结果  创建的字符串模板 
      loadTempalte() 方法 
      // 用于将模板插入到对应父节点的html 中;
      insertTemplate()
      // 用于发送 JSONP 请求 查询对应天气
      sendCity_getWeather()
       // 事件委托函数实现  主要是用来判断 输入框的值是否为空，并发送 城市名称
      toSearch_cityWeather()
      // 监听按钮的点击事件
     bindEventForSearchBtn_cityWeather
      // 主函数入口 调用
        var __main = function() {
            bindEventForSearchBtn_cityWeather();
        }
        // 入口函数启动
        __main()
       
````

## 使用方法
1 直接克隆获下载``html`` 文件并且 tfjs.js 与 其是同级目录下
2 下载好之后直接点开运行，输入查询城市。



## 提供查询天气 API 接口
```js
 `http://wthrcdn.etouch.cn/weather_mini?city=${cityVal}`
  cityVal => 是 城市值
  // 使用方法：
  var url = `http://wthrcdn.etouch.cn/weather_mini?city=${cityVal}`;
            $.ajax({
                type: "GET",
                url: url,
                dataType: "JSONP",
                success: function(data) {
                  // todo success
                  // 我的建议
                  // 这样data 就变成了 对象 里面有数组，你可以分析下使用格式，看你自己的想法了...
                  var data = data.data  
                },
                error: function(err) {
                    if (err) {
                       // todo err...
                    }
                }
            })
     // 比较坑的是： 成功之后返回的对象是一个大data  你需要 变成 var data = data.data; 这样来使用;可以输入到控制台查看结果
```
