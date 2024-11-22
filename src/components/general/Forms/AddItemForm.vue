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
            title="Название"
            type="text"
            palaceholder="placeholder"
            v-model.trim="formData.itemName"
            name="itemName"
            />    
            <InputComp
            title="Количество"
            type="number"
            palaceholder="itemsCount"
            v-model.trim="formData.itemsCount"
            name="itemName"
            /> 

            <DropDownSelect
            title="Страна производитель"
            name="sity"
            :dataElems="dropDownData"
            v-model="formData.sity"
            />

            <TextAreaComp
            title="Описание"
            name="description"
            placeholder="описание"
            v-model.trim="formData.textArea"
            />
            <Checkbox
                title="Чекбокс"
                name="checkbox"
                v-model="formData.activiy"
            />
            {{ formData.activiy }}

        <ButtonEl
            title="Добавить товар"
            @click='console.log(formData)'
        />
    </form>

    </PopupLauout>
</template>
<script setup>

import { ref,reactive } from 'vue';
import ButtonWhite from '../../ui/buttons/ButtonWhite.vue';
import PopupLauout from '../Lauouts/PopupLauout.vue';
import InputComp from '../../ui/formItems/InputComp.vue';
import ButtonEl from '../../ui/ButtonEl.vue';
import TextAreaComp from '../../ui/formItems/TextAreaComp.vue';
import DropDownSelect from '../../ui/formItems/DropDownSelect.vue';
import Checkbox from '../../ui/formItems/Checkbox.vue';
const popupState = ref(true)

const formData = reactive({
    itemName:'',
    textArea:'',
    itemsCount:0,
    sity:'',
    activiy:false
})
const dropDownData = ref([
    {title:'Россия',
        name:'rus'
    },
    {title:'Казахстан',
        name:'kz'
    },
    {title:'Англия',
        name:'uk'
    },
])
</script>