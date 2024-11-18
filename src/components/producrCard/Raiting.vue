<template>
          <div class="mt-2 flex items-center gap-2">
            <div class="flex items-center">

              <svg 
                v-for="i in 5 " :key="i" 
                class="h-4 w-4 "
                :class="[ i <= raiting ? 'text-yellow-400' :'text-gray-200' ]" 
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 24 24">
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>

              </div>
            <p class="text-sm font-medium text-gray-900 dark:text-white">{{ raiting }}</p>
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">({{ count }})</p>
          </div>
</template>
<script setup>
const props =defineProps(['raiting', 'count'])
</script>
<style>
</style>