<template>
    <ButtonWhite
    title="Добавить товар"
    @click="popupState = !popupState"/>

    <PopupLauout 
    v-if="popupState"
    @close-popup="popupState = !popupState"
    >
    <form class="flex flex-col gap-5 items-center w-full">
        <h1 class="  text-gray-900 text-xl ">Добавить товар</h1>
        <InputComp
            title="title"
            type="text"
            palaceholder="placeholder"
            v-model="inputText"
            name="title"
            />    
            <TextAreaComp
            title="Описание"
            name="description"
            placeholder="описание"
            v-model="textArea"/>
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
import InputComp from '../../ui/formItems/InputComp.vue';
import ButtonEl from '../../ui/ButtonEl.vue';
import TextAreaComp from '../../ui/formItems/TextAreaComp.vue';
const popupState = ref(true)

const inputText = ref('inputText')
const textArea= ref('textArea')

</script>