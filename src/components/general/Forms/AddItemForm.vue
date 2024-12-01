<template>
    <ButtonWhite
    title="Добавить товар"
    @click="openPopupCreatingItems"/>

    <PopupLauout 
    v-if="popupState"
    @close-popup="closePopup"
    >
    <Loader v-if="loading"/>
    <div class="" v-if="!errorData">
        <div v-if="formSendedSucsess" class="">
            
            <h1>Товар успешно сохранен в базу </h1>
        </div>
        <form v-else class="flex flex-col gap-5 items-center w-full" @submit.prevent="formSubmit">

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
                    v-bind="activityAttrs"
                /> 

            <ButtonEl
                type="submit"
                title="Добавить товар"
                
            />
        </form>
    </div>
    <div class=""v-else>
        <h1>Произошла непредвиденная ошибка</h1>
        {{ errorData }}
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
import Loader from '../Loader.vue'
import checkToken from '../../../helpers/checkToken';





const formSendedSucsess = ref(false)
const popupState = ref(false)
const loading = ref(false)
const errorData = ref('')

const schema = toTypedSchema(yup.object({
    itemName:yup.string().required('Обязательное поле').min(3,'Минимум 3 символа'),
    itemsCount:yup.number().required('укажите количемство'),
    sity:yup.string().required('Укажите страну'),
    description:yup.string().nullable(),
    activity: yup.mixed().oneOf([true, false, null, undefined]),
}))
const {errors,defineField, handleSubmit,resetForm}=useForm({
    validationSchema:schema,
    validateOnInput:true, 
    validateOnChange:true,
    strategy: 'individual'
})
const [itemName, itemNameAttrs]= defineField('itemName')
const [itemsCount, itemsCountAttrs]= defineField('itemsCount')
const [sity, sityAttrs]= defineField('sity')
const [description, descriptionAttrs]= defineField('description')
const [activity, activityAttrs]= defineField('activity')

const closePopup=()=>{
    popupState.value = false
    if(formSendedSucsess.value){
        resetForm();
        loading.value=false
        formSendedSucsess.value = false
        errorData.value = ''
        loading.value=false
    }
}
const openPopupCreatingItems =()=>{
    if(checkToken()){
        popupState.value = true
    }else{
        alert('access denied. need bearer token')
    }
    
}

const formSubmit = handleSubmit(async(values)=>{
    try{
        loading.value=true
        const response = await fetch('https://httpbin.org/anything ', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
            });

        if(response.ok){
            formSendedSucsess.value=true
        }else{
            console.log('error',response.error)
            errorData.value = response.error
            throw new Error('Ошибка сервера')
        }
    }catch(error){
        errorData.value = error
    }finally{
        loading.value=false
    }
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