<template>
<router-link :to="{name:'catalog'}" class="block border p-2 w-fit">Назад в каталог</router-link>
<Loader v-if="loading"/>
<ErrorNitification      
  @close-notification = "handleErrorClose"
    v-if="errorState"
    :title="error"
/>
<section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div v-if="!loading" class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
          
         <img  :src="productRef.image" alt="Product Image"/>
        </div>

        <div class="mt-6 sm:mt-8 lg:mt-0" >
          <h1
            class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
          >
            {{ productRef.title }}
          </h1>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
            >
              ${{ productRef.price }}
            </p>
          <Raiting
            :raiting='itemRaiting.count'
            :count='itemRaiting.rate'
          />
          </div>

          <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
            <ButtonEl
            title="Добавить в корзину"/>
          </div>

          <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

          <p class="mb-6 text-gray-500 dark:text-gray-400">
           {{ productRef.description }}
          </p>
        </div>
      </div>
    </div>
  </section>

</template>
<script setup>
import ButtonEl from '../components/ui/ButtonEl.vue'
import Raiting from '../components/producrCard/Raiting.vue';
import Loader from '../components/general/Loader.vue';
import ErrorNitification from '../components/notification/ErrorNitification.vue';
import { ref, computed, onMounted,watch } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import useProductFetch from '../hooks/useProductFetch';
const route = useRoute();
const itemId = computed(() => route.params.itemId);

const { productRef, loading, error, itemRaiting, errorState, fetchData } = useProductFetch(itemId);

const handleErrorClose = () => {
    errorState.value = false;
    error.value = ''; 
};

onMounted(fetchData)
onBeforeRouteUpdate((to, from,next)=>{
  fetchData()
  next()
})
</script>


