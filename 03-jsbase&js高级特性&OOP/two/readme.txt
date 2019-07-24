数组：
    定义数组 
    一堆操作数组方法
    再讲一堆方法

-------- 数组的扩展：
ES5:
    Array.isArray() 判断一个数据是否是数组
    forEach()  对数组进行循环
    map() 把原数组中的数组处理，返回一个新数组
    filter() 把原来的数组中的元素过滤出我们需要的元素，组成一个新数组
    reduce() 不断地将前一项和后一项的值进行运算（具体规则是由回调函数决定的，每次的运算会涉及两项）,把前一轮运算的结果作为当前运算的前一项。返回最后结果。
    some() 只要数组中的某一个元素符合指定的条件，就会返回真，否则返回假。
    every() 数组中的每一个元素符合指定的条件，就会返回真，否则返回假。

ES6:                                                           
    Array.from()  from是类方法（静态方法）把类数组转成真实数组
    Array.of()  把数转成数组
    find() 找符合条件的元素（默认找出第1个）
    findIndex() 找出符合条件的元素索引（默认找出第1个）
    includes()  判断一个元素是否在一个数组中
    fill() 给数组填充指定的值

------------ ES6中的解构赋值
数组的解构赋值
    let [a,b,c] = [1,2,3]
对象的解构赋值
    let {name:name,age:age} = {name:"wangcai",age:100}
    let {name,age} = {name:"wangcai",age:100}

------------ JS中的对象
对象：
    对象是属性的无序集合。{age:100,name:"wangcai"}  name叫键，也叫key   "wangcai"叫值，也叫value

JS中的对象分三类：
    内置对象：由ECMA实现的，不需要程序自己实现。
    宿主对象：DOM，BOM
    自定义对象：程序员自己写的对象

Global对象：
    全局对象，在浏览器端这个对象是不存在。但有一个代言人，叫Window
    声明的全局的数据都会挂载到window上面。

ECMAScript:
    浏览器的JS:没有Global对象
    node中的JS:有Global对象

在JS中，一切都是对象：
    基本数据类型是对象：
    引用数据类型是对象：

    结论：一切都是对象

document对象：
    对象中肯定有很多方法和属性，其中就有一个属性，叫__proto__。它又指向了一个对象。

OOP：
    一切都是对象
    对象是属性的集合
    对象是由函数创建
    原型和原型链
    JSON  JavaScript Object Notation  客户端与服务器通信的一种数据格式
    this 
    创建对象有N种方式：构造器+原型 
    继承  不劳而获  A   B   B构造器如果继承了A构造器，那么B构造器就可以使用A构造器中的数据
        继承属性：Parent.call(this,xxx)
        继承方法：Son.prototype = Parent.prototype   Son.prototype.constructor = Son;
                 for in

    ES6对对象的扩展：
        1，Object.getOwnPropertyDescriptor() 得到某个对象中某个属性的特征
        2，Object.defineProperty()   精细化设置一个对象的属性
        3，Object.defineProperties()  精细化设置一个对象的多个属性
        4，Object.getOwnPropertyNames()  得到对象中自已内部的所有的属性，放到一个数组中
        5，Object.keys()  得到对象中所有的属性（包含它自己的和它原型上），放到一个数组中
        6，Object.values()  得到对象中所有的属性（包含它自己的和它原型上）的值，放到一个数组中
        7，Object.create()  用于对字面量对象实现继承
        8，Object.getPrototypeOf()  得到一个对象的原型对象
        9，Object.assign()  用于对象的合并
        10，Object.preventExtensions()  不允许新增
        11，Object.seal()  不允许新增、也不允许删除
        12，Object.freeze()  不允许新增、不允许删除，不允许修改
        13，对象中可以把属性简写，可以把方法简写

    Class:
        class 父类{
            constructor(name,age){
                this.name = name;
                this.age = age;
            }
            say(){

            }
        }
        class 子类 extends 父类{
            constructor(name,age){
                super(name,age)
            }
        }
        静态方法和静态属性    只能类来调用    实例不能调用

    



























