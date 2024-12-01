<template>
    <div class="  w-full max-h-14 p-2 grid grid-cols-[40%_1fr_1fr_35px] gap-1">
        <span>{{ props.title }}</span>
        <div class=" flex flex-row gap-1 justify-around">
            <button
                class=" h-6 w-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                @click="decrementCount">-</button>
            <input class=" h-6 w-10 text-sm px-1" type="number" :value="props.count" @keyup.enter="updateCountData"
                >
            <button
                class=" h-6 w-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                @click="incrementCount">+</button>
        </div>
        <span class="flex items-center justify-center">{{  count * props.price }} $</span>
        <button @click="deleteItem()"
            class=" w-fit h-fit text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
        </button>

    </div>
</template>
<script setup>
    import{useStore} from 'vuex'
    const store = useStore()

    const props = defineProps(['title', 'price', 'count', 'id'])

    const updateCountData = () => {
        const newCount =  event.target.value
        store.dispatch('changeItemCountByInput', {id:props.id , count:newCount})
    }

    const incrementCount = () => {
        store.dispatch('incrementItemCount', props.id)
    };
    const decrementCount = () => {
        store.dispatch('decrementItemCount', props.id)
    };
    const deleteItem =()=>{
        store.dispatch('deleteItemById',props.id)
    }

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