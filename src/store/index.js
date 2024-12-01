import { createStore } from "vuex";

export default createStore({
    state:{
        basketItems:[],
        totalItems:0

    },
    getters:{
        getBasketItems: state=>state.basketItems,
        getTotalItemsInBasket :state=>state.totalItems
    },
    mutations:{
        ADD_PRODUCT(state, product){
            state.totalItems++
            const index = state.basketItems.findIndex(existingItem => existingItem.itemId === product.itemId);
            console.log(index)
            if(index == -1){
                state.basketItems.push(product)
            }else{
                state.basketItems[index].count++
            }
        },
        INCREMENT_ITENS_COUNT(state,productId){
            state.totalItems++
            const index = state.basketItems.findIndex(existingItem => existingItem.itemId === productId);
            if(index == -1){
                state.basketItems[index].count++
            }
        },
        CLEAR_BASKET(state){
            state.basketItems = state.basketItems.splice(0,state.basketItems.lenght)
        }
    },
    actions:{
        addProductToBasket({commit},data){
            commit('ADD_PRODUCT', data)
        },
        incrementItemCount({commit},id){
            commit('INCREMENT_ITENS_COUNT', id)
        },
        clearBasket({commit}){
            commit('CLEAR_BASKET')
        }
    }

})