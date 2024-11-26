<script setup lang="ts">
    import ButtonEl from '../ui/ButtonEl.vue';
    const toggleTokenInLocalStorage =()=>{
        if(localStorage.getItem('bearerToken')){
            localStorage.removeItem('bearerToken')
        }else{
            localStorage.setItem('bearerToken','bearertokenData')
        }
    }
</script>

<template>
    <div class=" w-full flex items-center justify-center mt-10">
        <ButtonEl
        @click="toggleTokenInLocalStorage()"
        class=" mb-0 mr-0"
        title="Добавить/удалить токен"/>
    </div>
</template>