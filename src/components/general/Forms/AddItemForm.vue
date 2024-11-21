<template>
    <ButtonWhite
    title="Добавить товар"
    @click="popupState = !popupState"/>

    <PopupLauout 
    v-if="popupState"
    @close-popup="popupState = !popupState"
    >
    <form class="flex flex-col gap-5">
        <h1 class="bg-gray-50  text-gray-900 text-xl ">Добавить товар</h1>
        <InputComp
            title="title"
            type="text"
            palaceholder="placeholder"
            v-model="inputText"
            name="title"
            />
        <ButtonEl
            title="Добавить товар"
        />
    </form>

    </PopupLauout>
</template>
<script setup>

import { ref } from 'vue';
import ButtonWhite from '../../ui/buttons/ButtonWhite.vue';
import PopupLauout from '../Lauouts/PopupLauout.vue';
import InputComp from '../../ui/InputComp.vue';
import ButtonEl from '../../ui/ButtonEl.vue';
const popupState = ref(false)

const inputText = ref('inputText')

</script>