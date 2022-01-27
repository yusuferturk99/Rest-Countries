export default {
    namespaced:true,
    state:{
        token:null,
        email:'guest@guest.com'
    },
    mutations:{
        token(state, payload){
            state.token = payload
        }
    },
    getters:{
        token(state){
            return state.token
        }
    },
    actions:{
        
    }
}