export default {
    namespaced: true,
    state:()=>({
        email:''
    }),
    getters:{
        getUserEmail: state => state.email
    },
    mutations:{
        WRITE_EMAIL(state,email){
            console.log('mutation')
            state.email= email
        },
        CLEAN_EMAIL(state){
            state.email = ''
        }
    },
    actions:{
        userLogIn({commit},email){
            console.log('action')
            commit('WRITE_EMAIL', email)
        },
        userLogOut({commit}){
            commit('CLEAN_EMAIL')
        }
    }
}