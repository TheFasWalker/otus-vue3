<template>
    <ButtonWhite
    title="Добавить товар"
    @click="popupState = !popupState"/>

    <PopupLauout 
    v-if="popupState"
    @close-popup="popupState = !popupState"
    >
asdfaa
    </PopupLauout>
</template>
<script setup>
import { ref } from 'vue';
import ButtonWhite from '../../ui/buttons/ButtonWhite.vue';
import PopupLauout from '../Lauouts/PopupLauout.vue';
const popupState = ref(false)

</script>