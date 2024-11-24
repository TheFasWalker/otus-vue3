<script setup>
import Search from '../Forms/Search.vue';
import HeaderBasket from '../headerBasket/HeaderBasket.vue';
import ButtonWhite from '../ui/buttons/ButtonWhite.vue';
import AddItemForm from './Forms/AddItemForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const logOut=()=>{
  if(localStorage.getItem('bearerToken')){
    localStorage.removeItem('bearerToken')
  }
  router.push({name:'login'})

}
</script>

<template>
<nav class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
    <div class="flex flex-wrap justify-between items-center">
      <div class="flex justify-start items-center gap-2">

        <a href="https://flowbite.com" class="flex items-center justify-between mr-4">
          <img
            src="https://flowbite.s3.amazonaws.com/logo.svg"
            class="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <Search/>
        <AddItemForm/>
      </div>
      <div class=" flex flex-row gap-2">
        <HeaderBasket/>
        <ButtonWhite
        @click="logOut()"
        title="LogOut"/>
      </div>
      
    </div>
  </nav>
</template>

<style >

</style>
