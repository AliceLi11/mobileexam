import Vue from "vue"
import Vuex from "vuex"
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex)
const state = {
    level:"第一周",//活动周数
    itemNum:1,//第几题
    allTime:0,//总共用时
    answerid:[]//答案id


}
export default new Vuex.Store({
    state,
    actions,
    mutations
})