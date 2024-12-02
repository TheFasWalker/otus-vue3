export default {
    namespaced: true,
    state:()=>({
        basketItems:[],
        totalItems:0,
        totalCost:0,

    }),
    getters:{
        getBasketItems: state=>state.basketItems,
        getTotalItemsInBasket :state=>state.totalItems,
        getTotaBasketCost : state=>state.totalCost
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
            state.totalCost = calculateTotalCost(state.basketItems)
        },
        INCREMENT_ITENS_COUNT(state,productId){
            state.totalItems++
            const index = state.basketItems.findIndex(existingItem => existingItem.itemId === productId);
                state.basketItems[index]['count']++
                state.totalCost = calculateTotalCost(state.basketItems)
        },
        CLEAR_BASKET(state){
            state.totalItems=0
            state.basketItems = state.basketItems.splice(0,state.basketItems.length)
            state.totalCost = calculateTotalCost(state.basketItems)
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
            state.totalCost = calculateTotalCost(state.basketItems)
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
            state.totalCost = calculateTotalCost(state.basketItems)
                
            
        },
        CHANGE_ITEMS_COUNT(state, data){
            const productId = data.id
            const newCount = data.count
            const index = state.basketItems.findIndex(existingItem => existingItem.itemId === productId);
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
            state.totalCost = calculateTotalCost(state.basketItems)

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

}

function calculateTotalCost(basketItems) {
    let counter = 0
    basketItems.forEach(element => {
        counter = counter + element.count * element.price
    });
    return counter;
}