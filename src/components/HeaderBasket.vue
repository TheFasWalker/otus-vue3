<template>
<div class=" relative" 
>
    <button 
        @click="toggleBasket"
            type="button" 
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
            >
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
        </svg>
   </button>
   <div v-if="showBasketState" class=" absolute rounded-lg shadow  bg-white  w-[550px] right-0 top-full ">
     <span class="w-full flex items-center py-3 justify-center font-bold text-xl">Ваша корзина</span>
    <div v-if="itemsInBasket.length == 0" class=" flex w-full items-center justify-center">
        <span>Тут ничег онет</span>
    </div>
     <div v-if="itemsInBasket.length >0" class="rounded-lg w-full">
        <div class="p-2 grid grid-cols-[40%_1fr_1fr_35px] w-full gap-1">
            <span class="flex w-full justify-center">Название</span>
            <span class="flex w-full justify-center">Количество</span>
            <span class="flex w-full justify-center">Цена</span>
        </div>
        <div class=" p-2 max-h-48 overflow-y-auto flex flex-col gap-1">
           <div class="  w-full max-h-14 p-2 grid grid-cols-[40%_1fr_1fr_35px] gap-1">
                <span>товар номер один</span>
                <div class=" flex flex-row gap-1 justify-around">
                    <button class=" h-6 w-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">-</button>
                    <input class=" h-6 w-10 text-sm px-1" type="number" value="11">
                    <button class=" h-6 w-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">+</button>
                </div>
                <span class="flex items-center justify-center">500 денег</span>
                <button class=" w-fit h-fit text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>
                </button>

           </div>
           <div class="  w-full max-h-14 p-2 grid grid-cols-[40%_1fr_1fr_35px] gap-1">
                <span>товар номер один</span>
                <div class=" flex flex-row gap-1 justify-around">
                    <button class=" h-6 w-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">-</button>
                    <input class=" h-6 w-10 text-sm px-1" type="number" value="11">
                    <button class=" h-6 w-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">+</button>
                </div>
                <span class="flex items-center justify-center">500 денег</span>
                <button class=" w-fit h-fit text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>
                </button>

           </div>
            <div class="  w-full max-h-14 p-2 grid grid-cols-[40%_1fr_1fr_35px] gap-1">
                <span>товар номер один</span>
                <div class=" flex flex-row gap-1 justify-around">
                    <button class=" h-6 w-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">-</button>
                    <input class=" h-6 w-10 text-sm px-1" type="number" value="11">
                    <button class=" h-6 w-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">+</button>
                </div>
                <span class="flex items-center justify-center">500 денег</span>
                <button class=" w-fit h-fit text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>
                </button>

           </div>

           
        </div>
     </div>

        <div v-if="itemsInBasket.length >0" class="p-2 flex flex-row justify-between border-t-emerald-100 w-full">
            <div class="flex flex-col gap-2">
                <span>ItemsInBasket:100</span>
                <span> totalCost: 500$ </span>
                
            </div>  
            <ButtonWhite
            title="cleanBasket"/>
            <!-- <button class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">cleanBasket</button> -->
        </div>
    </div>
</div>
</template>
<script setup>
    import {ref} from 'vue'
import ButtonWhite from './ui/buttons/ButtonWhite.vue';

    const showBasketState =ref(false)
    const toggleBasket=()=>{
        showBasketState.value=!showBasketState.value
    }


    const itemsInBasket = ref([
        {asdfr:123}
    ])




</script>
<style lang="css" scoped>
    input[type="number"] {
    -moz-appearance: textfield;
    }
    input[type="number"]::-webkit-inner-spin-button, 
    input[type="number"]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
</style>