import ajax from "../config/ajax"

export default{
    //初始化信息
    initializeData({commit}){
        commit('INITIALIZE_DATA');
    }
}