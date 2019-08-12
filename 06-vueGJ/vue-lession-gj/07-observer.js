let obj = {
    name:"wangcai",
    age:{
        a:110
    }
}
function observer(obj){
    if(typeof obj == "object"){
        for(let key in obj){
            definReactive(obj,key,obj[key])
        }
    }
}
function definReactive(obj,key,value){
    // 如果value是一个对象的话，要继续监控
    observer(value)
    Object.defineProperty(obj,key,{
        get(){
            console.log("get...")
            return value;
        },
        set(val){
            observer(val) // 如果给属性赋了一个新的对象，让它继续监控
            console.log("set..")
            value = val;
        }
    })
}
// defineProperty是数组是无效的
let arr = ["push","slice","shift","unshift"]
arr.forEach(method=>{
    let old = Array.prototype[method];
    Array.prototype[method] = function(value){
        console.log("set...")
        old.call(this,value)
    }
})

observer(obj)
obj.age = [1,2,3]
obj.age.length--;



// obj.age.push(4)

// observer(obj)
// obj.age = [1,2,3] // set..
// obj.age.push(4)  // 设置值  defineProperty对数据是无效的









// observer(obj)
// // obj.name  // get...
// // obj.name = "hello" // set...
// obj.age = { k:"kkkk" }  // set...
// obj.age.k = "mmmm"  // set...


// observer(obj)
// // 给age赋了一个新对象，新对象并没有监控到
// obj.age = {
//     b:888
// }
// console.log(obj.age.b)

// observer(obj)
// console.log(obj.age)
// obj.age.a = 666;


// observer(obj)
// console.log(obj.name)
// obj.name = "hello"