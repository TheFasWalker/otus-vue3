<template>
    <ButtonWhite
    title="Добавить товар"
    @click="popupState = !popupState"/>

    <PopupLauout 
    v-if="popupState"
    @close-popup="popupState = !popupState"
    ><div class="">
    <form class="flex flex-col gap-5 items-center w-full" @submit.prevent="formSubmit">
        <div class=""></div>
        <h1 class="  text-gray-900 text-xl ">Добавить товар</h1>
            <InputComp
                title="Название"
                type="text"
                palaceholder="placeholder"
                v-model.trim="itemName"
                v-bind="itemNameAttrs"
                name="itemName"
                :error="errors.itemName"

            />    

            <InputComp
                title="Количество"
                type="number"
                palaceholder="itemsCount"
                v-bind="itemsCountAttrs"
                v-model.trim="itemsCount"
                name="itemCount"
                :error="errors.itemsCount"

            /> 

            <DropDownSelect
                title="Страна производитель"
                name="sity"
                :dataElems="dropDownData"
                v-model="sity"
                v-bind="sityAttrs"
                :error="errors.sity"
            />

            <TextAreaComp
                title="Описание"
                name="description"
                placeholder="описание"
                v-model.trim="description"
                v-bind="descriptionAttrs"
            />
            <Checkbox
                title="Чекбокс"
                name="activity"
                v-model="activity"
            /> 

        <ButtonEl
            type="submit"
            title="Добавить товар"
            
        />
    </form>
</div>

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
import { useForm } from 'vee-validate';
import {toTypedSchema} from '@vee-validate/yup'
import * as yup from 'yup'

const schema = toTypedSchema(yup.object({
    itemName:yup.string().required('Обязательное поле').min(3,'Минимум 3 символа'),
    itemsCount:yup.number().required('укажите количемство'),
    sity:yup.string().required('Укажите страну'),
    description:yup.string(),
    activity: yup.boolean()
}))
const {errors,defineField, handleSubmit}=useForm({
    validationSchema:schema
})
const [itemName, itemNameAttrs]= defineField('itemName')
const [itemsCount, itemsCountAttrs]= defineField('itemsCount')
const [sity, sityAttrs]= defineField('sity')
const [description, descriptionAttrs]= defineField('description')
const [activity, activityAttrs]= defineField('activity')

const popupState = ref(true)

const formSubmit = handleSubmit(values=>{
    console.log(values)
    console.log('sending')
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