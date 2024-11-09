<template>
            <button type="button"
              class="rounded-lg border border-gray-200 bg-white px-5 me-2 mb-2 py-2.5 text-sm font-bold text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
              {{ title }}
              </button>
 
</template>
<script setup>
const props =defineProps(['title'])
</script>