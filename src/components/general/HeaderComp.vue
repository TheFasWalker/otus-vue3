<script setup>
import HeaderBasket from '../HeaderBasket.vue';
import ButtonWhite from '../ui/buttons/ButtonWhite.vue';

</script>

<template>
<nav class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
    <div class="flex flex-wrap justify-between items-center">
      <div class="flex justify-start items-center">

        <a href="https://flowbite.com" class="flex items-center justify-between mr-4">
          <img
            src="https://flowbite.s3.amazonaws.com/logo.svg"
            class="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
      </div>
      <div class=" flex flex-row gap-2">
        <HeaderBasket/>
        <ButtonWhite
        title="LogOut"/>
      </div>
      
    </div>
  </nav>
</template>

<style >

</style>
