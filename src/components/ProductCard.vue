<template>
          <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="h-56 w-full">
          <a href="#">
            <img class="mx-auto h-full "  :src="props.product.image" alt="">
          </a>
        </div>
        <div class="pt-6">
          <router-link
          :to="{name:'itemPage', params:{ itemId:props.product.id}}"
            class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white max-h-11 overflow-hidden block"
          >
            {{ props.product.title }}
          </router-link>
          

          <Raiting
          :raiting="props.product.rating.rate"
          :count="props.product.rating.count"/>
            <div class="pt-5 h-52 overflow-y-clip">
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ props.product.description }}</p>
            </div>
          <div class="mt-4 flex items-center justify-between gap-4">
            <p class="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">${{ props.product.price }}</p>
            <ButtonEl
            @click="addToCart()"
            title="В корзину"/>
          </div>
        </div>
      </div>
</template>

<script setup>
  import Raiting from './producrCard/Raiting.vue';
  import ButtonEl from './ui/ButtonEl.vue';
  import{useStore} from 'vuex'

  const store = useStore()

  function addToCart(){
    store.dispatch('basket/addProductToBasket', {
      title:props.product.title,
      count:1,
      itemId:props.product.id,
      price: props.product.price
    })
  }
  function incrementItemCount(id){
    store.dispatch('basket/incrementItemCount',id)
  }
  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  })
    
</script>

<style >

</style>