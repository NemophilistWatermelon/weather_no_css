var clear = function() {
    document.write("");
}


var log = function(e) {
    console.log(e)
};
var dir = console.dir.bind(console);

//多个元素绑定事件
var bindEvents = function(element, eventName, callback, bool) {
    var l = element.length;
    for (var i = 0; i < l; i++) {
        element[i].addEventListener(eventName, callback);
    }
}
// 获取多个元素;
var es = function(selector) {
    return document.querySelectorAll(selector);
}

//获取单个元素
var e = function(selector) {
    return document.querySelector(selector);
}
//单个元素绑定事件
var bindEvent = function(element, eventName, callback, bool) {
    element.addEventListener(eventName, callback);
}
// 切换class
var toggleClass = function(e, className) {
    if (e.classList.contains(className)) {
        e.classList.remove(className);
    } else {
        e.classList.add(className);
    }
}

// 一个元素 多个监听事件 默认监听 2 个事件
/*
    option params ==> 对象集合 传入 事件 配置项;
    callback     ===> 对象一对一事件绑定函数;

    函数 测试阶段
*/
var bindEventBuffer = function(ele, option, callback, bool) {

    // 被绑定元素 集合 < 1;
    if (ele.length === 1) {
        switch (option) {
            // 判断分流对象
            case option.eventName_1:
                bindEvent(ele, eventName_1, callback.eventName_1);
                break;
            case option.eventName_2:
                bindEvent(ele, eventName_1, callback.eventName_1);
                break;
            default:
                log('绑定失败');
        }
    } else {
        //  被绑定函数达于 2 的情况
        switch (option) {
            // 判断分流对象
            case option.eventName_1:
                bindEvents(ele, eventName_1, callback.eventName_1);
                break;
            case option.eventName_2:
                bindEvents(ele, eventName_1, callback.eventName_1);
                break;
            default:
                log('绑定失败');
        }
    }

}




// 删除Class
var removeClass = function(e, className) {
    if (e.classList.contains(className)) {
        e.classList.remove(className);
    }
}

// 添加class
var addClass = function(e, className) {
    if (e.classList.contains(className)) {
        return
    } else {
        e.classList.add(className);
    }


}
// 提取接口渲染网页上的数据，一般用于php echo $array
var getJson = function(text) {
    return JSON.parse(text["match"](/.*/)[0]);
}





//ajax


var ajax = function() {
    var myAjax = {
        success: arguments[0].success || function() {},
        error: arguments[0].error || function() {},
    }

    // arguments[0].async == true ? arguments[0].async =true : arguments[0].async = false
    var x = new XMLHttpRequest();
    x.open(arguments[0].method, arguments[0].url);
    x.send(arguments[0].data);
    x.onreadystatechange = function() {
        if (x.readyState == 4) {
            // 回调 success 函数
            myAjax.success(x.response);
        } else {
            // 回调 error 函数
            myAjax.error();
        }
    }
}
/*例子
 ajax({
    method: "GET",
    data: "",
    url: "http://jsonplaceholder.typicode.com/users",
    success(data) {
        console.log('有数据了');
    },
    error(e) {
    //    dududu
    }
})*/
