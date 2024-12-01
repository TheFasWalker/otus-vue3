<template>
    <div class=" relative">
        <button @click="toggleBasket" type="button"
            class="py-2.5 px-5 me-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  relative">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
            </svg>
            <span v-if="store.state.totalItems" class=" absolute top-0.5 right-0.5 block bg-slate-500 w-fit h-fit p-0.5 rounded text-white text-xs font-bold"> {{ store.state.totalItems }}</span>
           
        </button>
        <div v-if="showBasketState" class=" absolute rounded-lg shadow  bg-white  w-[550px] right-0 top-full ">
            <span class="w-full flex items-center py-3 justify-center font-bold text-xl">Ваша корзина</span>
           <div v-if="!itemsInBasket.length" class=" flex w-full items-center justify-center">
                <span>Тут ничег онет</span>
            </div>
             <div v-if="itemsInBasket.length" class="rounded-lg w-full">
                <div class="p-2 grid grid-cols-[40%_1fr_1fr_35px] w-full gap-1">
                    <span class="flex w-full justify-center">Название</span>
                    <span class="flex w-full justify-center">Количество</span>
                    <span class="flex w-full justify-center">Цена</span>
                </div>
                <div class=" p-2 max-h-48 overflow-y-auto flex flex-col gap-1">

                    <BasketPreview v-for="item in itemsInBasket" 
                        @delete-item="deleteItem(item.id)" 
                        :title="item.title" 
                        :count="item.count" 
                        :price="item.price"
                        :id="item.itemId" 
                        :key="item.id"
                         />
                </div>
            </div>

            <div v-if="itemsInBasket.length > 0" class="p-2 flex flex-row justify-between border-t-emerald-100 w-full">
                <div class="flex flex-col gap-2">
                    <span>ItemsInBasket:{{ store.state.totalItems }}</span>
                    <!-- <span> totalCost: {{ totalCost }}$ </span> -->

                </div>
                <ButtonWhite @click="clearBasket" title="cleanBasket" />
            </div>
        </div>
    </div>
</template>
<script setup>
    import { computed, reactive, ref } from 'vue'
    import ButtonWhite from '../ui/buttons/ButtonWhite.vue';
    import BasketPreview from './BasketPreview.vue';
    import{useStore} from 'vuex'

    const store = useStore()
    
    const showBasketState = ref(true)
    const toggleBasket = () => {
        showBasketState.value = !showBasketState.value
    }

    const itemsTotalCountInBasket = computed(()=>store.state.totalItems)
    const itemsInBasket = computed(()=>store.state.basketItems)
    function deleteItem(elemId) {
        const index = itemsInBasket.findIndex((elem) => elem.id == elemId)
        itemsInBasket.splice(index, 1)

    }
    // function updateCount(event) {
    //     const changingItem = itemsInBasket.find((item) => item.id == event.id)
    //     changingItem.count = event.newCoutn
    // }
    function clearBasket() {
        // itemsInBasket.splice(0, itemsInBasket.length)
        console.log('clean')
        store.dispatch('clearBasket')
    }



</script>