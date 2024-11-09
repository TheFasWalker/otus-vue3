<template>
          <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="h-56 w-full">
          <a href="#">
            <img class="mx-auto h-full "  :src="product.image" alt="">
          </a>
        </div>
        <div class="pt-6">
          <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{{ product.title }}</a>
          <Raiting/>
            <div class="pt-5">
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ product.description }}</p>
            </div>
          <div class="mt-4 flex items-center justify-between gap-4">
            <p class="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">${{ product.price }}</p>
            <ButtonEl
            title="В корзину"/>
          </div>
        </div>
      </div>
</template>

<script setup>
  import {ref} from 'vue'
  import Raiting from './producrCard/Raiting.vue';
  import ButtonEl from './ui/ButtonEl.vue';

  const product = ref({
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    })
    
</script>

<style >

</style>