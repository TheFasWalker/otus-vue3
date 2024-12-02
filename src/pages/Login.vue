<template>


    <form class="max-w-md mx-auto flex flex-col gap-4" @submit.prevent="formSubmit">
        <InputComp
        title="email"
        type="email"
        name="email"
        v-model="email"
        v-bind="emailAttrs"
        :error="errors.email"
        placeholder="Email"/>

        <InputComp
        title="Пароль"
        name="password"
        v-model="password"
        v-bind="passwordAttrs"
        :error="errors.password"
        placeholder="password"/>

        <ButtonEl
        class="w-full"
        type="submit"
        title="Войти"/>

    </form>

</template>
<script setup>
import { toTypedSchema } from '@vee-validate/yup';
import ButtonEl from '../components/ui/ButtonEl.vue';
import InputComp from '../components/ui/formItems/InputComp.vue';
import {useForm} from 'vee-validate'
import * as yup from 'yup'
import {useRouter} from 'vue-router'
import { useStore } from 'vuex';

const store = useStore()

const schema = toTypedSchema(yup.object({
    email:yup.string().email('Невалидный email').required('Обязательное поле'),
    password:yup.string().required('Обязательное поле').min(6,'минимум 6 знаков')
}))
const {errors,defineField,handleSubmit,resetForm}= useForm({
    validationSchema:schema,
    validateOnInput:true, 
    validateOnChange:true,
    strategy: 'individual'
})
const router = useRouter()

const [email, emailAttrs]= defineField('email')
const [password, passwordAttrs]= defineField('password')

const formSubmit=handleSubmit(()=>{
    localStorage.setItem('bearerToken','asdfaaasdfaaasdfasdfasdfaa')
    console.log(email.value)
    store.dispatch('user/userLogIn',email.value )
    router.push({ name: 'home' });
})
</script>