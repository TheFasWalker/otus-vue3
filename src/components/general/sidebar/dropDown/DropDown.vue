<template>
    <div>
      <div class="grid grid-cols-[1fr_50px] items-center  w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
        <router-link 
        class="flex flex-row items-center pl-2 py-2"
        :to="{name:'home'}">
          <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-3">homeDropDown</span>
          
        </router-link>
        <button
            @click="toggleDropDown"
              type="button"
              class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-sales"
              data-collapse-toggle="dropdown-sales"
            >
              <svg
                aria-hidden="true"
                 :class="{ 'rotate-180': dropdownState }"
                class="w-6 h-6 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
      </div>

            <ul v-if="dropdownState" class=" py-2 space-y-2">
              <SubLink 
                v-for="item in subLinks"
                :title="item.title"
                :navName="item.navTo"
                />

            </ul>
    </div>
</template>
<script setup>
  import { ref} from 'vue';
  defineProps({
    title:{
      type:String
    },
    navName:{
      type:String
    },
    subLinks:{
      type:Array
    }

  })
  import SubLink from './SubLink.vue';

  const dropdownState = ref(false)
  const toggleDropDown = ()=>{
      dropdownState.value= !dropdownState.value
  }
  
</script>
<style></style>