(function() {}() )
(function() {} )()
[function() {}() ]

// 去掉语句优先，使用表达式来解释
~function(){}()
!function(){}()
+function(){}()
+function(){}()
-function(){}()
delete function(){}()
typeof function(){}()
void function(){}()
new function(){}()

var f = function(){}();

1,function(){}();
1^function(){}();
1>function(){}();

// 高阶函数就是把函数当作参数或返回值是函数的函数
// 回调函数
[1,2,3,4,5].forEach(function(item){
    console.log(item)
})

// 闭包：函数嵌套，对外提供访问  解决全局变量污染
// 闭包  两部分组成  1，函数   2，环境：函数创建时作用域内的局部环境
function makeCounter(init){
    var init = init || 0;
    return function(){
        return ++init;
    }
}
var counter = makeCounter(10);
console.log(counter())
console.log(counter())

// 惰性函数
function eventBinderGenerator(){
    if(window.addEventListener){
        return function(element,type,handler){
            element.addEventListener(type,handler,false)
        }
    }else{
       return function(element,type,handler){
           length.addEventListener("on"+type,handler.bind(element,window.event))
       } 
    }
}

// 柯里化  一种允许部分参数生成函数的方式
function isType(type){
    return function(obj){
        return Object.prototype.toString.call(obj) === '[object '+type+']';
    }
}
var isNumber = isType('Nubmer')
console.log(isNumber(1))
console.log(isNumber('s'))

var isArray = isType('Array')
console.log(isArray(1))
console.log(isArray([1,2,3]))
// ---------------
function f(n){
    return n*n;
}
function g(n){
    return n*2
}
console.log(f(g(5)))
// ----------------
function pipe(f,g){
    return function(){
        return f.call(null,g.apply(null,arguments));
    }
}
var fn = pipe(f,g);
console.log(fn(5))