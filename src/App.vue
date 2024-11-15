<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <HeaderComp />
    <Sidebar />
    <Loader v-if="loading"/>
    <main class="p-4 md:ml-64 pt-20 h-[100vh] overflow-x-auto">

      <section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
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

      </section>
    </main>
  </div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import HeaderComp from './components/general/HeaderComp.vue';
import Sidebar from './components/general/Sidebar.vue';
import ProductCard from './components/ProductCard.vue';
import Loader from './components/general/Loader.vue';
import ButtonWhite from './components/ui/buttons/ButtonWhite.vue';

const loading=ref(true)
const productsRef = ref([])
const error = ref('')


onMounted(async ()=>{
  try{
    const response = await fetch('https://fakestoreapi.com/products')

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: `HTTP error! status: ${response.status}` }));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    productsRef.value = await response.json();
    loading.value = false
  }catch(e){
    error.value = e;
    console.error('Error fetching data:', e);
    loading.value = false
  }
})

</script>

<style></style>
