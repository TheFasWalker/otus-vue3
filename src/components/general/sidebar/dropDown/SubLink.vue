<template>
    <li>
        <router-link
        :to="{name: navName }"
             class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 "
        >
            {{ title }}
        </router-link>
    </li>
</template>
<script setup>
    defineProps(['title','navName'])
</script>