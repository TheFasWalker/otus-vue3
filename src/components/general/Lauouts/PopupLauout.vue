<template>

    <div
    @click="missclick"
        ref="popupContainer"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full bg-[#0000026c] flex ">
        <div class="relative  w-full max-w-xl h-full md:h-auto bg-white rounded-lg">

            <div class="relative p-4 bg-white rounded-lg shadow  pt-14">
                <button 
                    type="button"
                    class=" absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                    @click="$emit('close-popup')"
                    >
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <slot ></slot>

            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const emit = defineEmits(['close-popup'])
const popupContainer = ref(null);
const missclick =()=>{

    if (event.target == popupContainer.value) {
    emit('close-popup');
  }
}
</script>