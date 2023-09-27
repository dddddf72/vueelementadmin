import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        price:"",
        list:[],
        time:"",
        username:"",
        address:""
    },
    mutations:{
        setState(state,value){
            state.price = value.total
            state.list = value.checkedGoods
            state.time = value.createTime
        },
        setUserName(state,name){
            state.username = name
        },
        setAddress(state,value){
            state.address = value
        }
    }
})
export default store