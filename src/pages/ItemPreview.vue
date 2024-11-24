<template>
<router-link :to="{name:'catalog'}" class="block border p-2 w-fit">Назад в каталог</router-link>

<section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
          <img class="w-full " :src=productRef.image />
        </div>

        <div class="mt-6 sm:mt-8 lg:mt-0">
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
            <!-- {{ productRef.rating.count }} -->
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
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import{computed, onMounted, watch,ref} from 'vue'
import ButtonEl from '../components/ui/ButtonEl.vue'
import Raiting from '../components/producrCard/Raiting.vue';
const route = useRoute()
const itemId = computed(()=>route.params.itemId)
const itemRaiting =ref({})
const productRef = ref('')
const loading=ref(true)
const error = ref('')
const errorState = ref(false)

watch (route, async ()=>{
    console.log(`loaging data for id with watch = ${itemId.value}`)
     
    try{
    const response = await fetch(`https://fakestoreapi.com/products/${itemId.value}`)
    errorState.value=false
    if (!response.ok) {
      error.value = await response.json().catch(() => ( response.status));
      throw new Error(error.value || `HTTP error! status: ${response.status}`);
    }

    productRef.value = await response.json();
    itemRaiting.value = productRef.value.rating
    loading.value = false
    console.log(productRef.value.rating.count)
  }catch(e){
    error.value = e;
    console.error('Error fetching data:', e.value);
    loading.value = false
    errorState.value=true
  }

})

onMounted(
    async ()=>{
    console.log(`loaging data for id = ${itemId.value}`)
    try{
    const response = await fetch(`https://fakestoreapi.com/products/${itemId.value}`)
    errorState.value=false
    if (!response.ok) {
      error.value = await response.json().catch(() => ( response.status));
      throw new Error(error.value || `HTTP error! status: ${response.status}`);
    }

    productRef.value = await response.json();
    loading.value = false
    itemRaiting.value = productRef.value.rating
    console.log(productRef.value.rating)
  }catch(e){
    error.value = e;
    console.error('Error fetching data:', e.value);
    loading.value = false
    errorState.value=true
  }
}
)


</script>