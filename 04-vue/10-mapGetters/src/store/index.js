import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        list:[
            {name:"wangcai1",score:40},
            {name:"wangcai2",score:50},
            {name:"wangcai3",score:60},
            {name:"wangcai4",score:70},
            {name:"wangcai5",score:80},
            {name:"wangcai6",score:90},
            {name:"wangcai7",score:100}
        ]
    },
    mutations:{
        
    },
    getters:{
        // 多少人分类小于60分
        faileNumber(state){
            let n = 0;
            state.list.forEach(item=>{
                if(item.score<60){
                    n++
                }
            })
            return n;
        }
    }
})