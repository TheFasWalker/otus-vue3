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
            if(index == -1){
                state.basketItems.push(product)
            }else{
                state.basketItems[index].count++
            }
        },
        INCREMENT_ITENS_COUNT(state,productId){
            state.totalItems++
            const index = state.basketItems.findIndex(existingItem => existingItem.itemId === productId);
                state.basketItems[index]['count']++
        },
        CLEAR_BASKET(state){
            state.totalItems=0
            state.basketItems = state.basketItems.splice(0,state.basketItems.lenght)
        },
        DELETE_ITEM_BY_ID(state,productId){
            const index = state.basketItems.findIndex(existingItem => existingItem.itemId === productId);
            const itemsCount = state.basketItems[index]['count']
            if( state.totalItems - itemsCount >=0){
                state.totalItems = state.totalItems - itemsCount 
            }else{
                state.totalItems = 0
            }

            state.basketItems.splice(index,1)
        },
        DECREMENT_ITENS_COUNT(state,productId){
            if(state.totalItems >0){
                state.totalItems--
            }
            const index = state.basketItems.findIndex(existingItem => existingItem.itemId === productId);
            if(state.basketItems[index]['count'] >=2){
                state.basketItems[index]['count']--
            }else{
                state.basketItems.splice(index,1)
            }

                
            
        },
        CHANGE_ITEMS_COUNT(state, data){
            const productId = data.id
            const newCount = data.count
            const index = state.basketItems.findIndex(existingItem => existingItem.itemId === productId);
            console.log('oldVal= ' +state.basketItems[index]['count'] + '   newVal= ' + newCount )
            if(newCount >0 ){
                if(newCount > state.basketItems[index]['count']){
                    state.totalItems = Number(state.totalItems) + Number(newCount) - Number(state.basketItems[index]['count'])
                }else if(newCount < state.basketItems[index]['count'] ){
                    state.totalItems = Number(state.totalItems) - Number(state.basketItems[index]['count']) - Number(newCount)
                }
                state.basketItems[index]['count']= newCount
            }else{
                state.totalItems = Number(state.totalItems) - Number(state.basketItems[index]['count'])
                state.basketItems.splice(index,1)
            }

        }
    },
    actions:{
        addProductToBasket({commit},data){
            commit('ADD_PRODUCT', data)
        },
        incrementItemCount({commit},id){
            commit('INCREMENT_ITENS_COUNT', id)
        },
        decrementItemCount({commit},id){
            commit('DECREMENT_ITENS_COUNT', id)
        },
        clearBasket({commit}){
            commit('CLEAR_BASKET')
        },
        deleteItemById({commit},id){
            commit('DELETE_ITEM_BY_ID', id)
        },
        changeItemCountByInput({commit},data){
            commit('CHANGE_ITEMS_COUNT',data)
        }
    }

})