<template>
        <Loader v-if="loading"/>
    <Error 
      @close-notification = "errorState = $event"
      v-if="errorState"
      :title="error"
    />
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div v-if="!productsRef.length" class="flex items-center justify-center">
          <span class="text-center">Чт ото пошло не так... <br> товаров нет...</span>
          
        </div>
          <div v-if="productsRef.length" class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            <ProductCard v-for="product in productsRef" :key="product.id" :product="product"/>
          </div>
          <div v-if="productsRef.length" class="w-full text-center">
            <ButtonWhite
            title="Показать еще"/>
          </div>
        </div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import Loader from '../components/general/Loader.vue';
import ButtonWhite from '../components/ui/buttons/ButtonWhite.vue';
import Error from '../components/notification/ErrorNitification.vue'
import useProductListFetch from '../hooks/useProductListFetch';

const {loading, productsRef,error,errorState, fetchData } = useProductListFetch()
onMounted(fetchData)
</script>