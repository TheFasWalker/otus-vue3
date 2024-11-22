<template>
<label class="w-full flex flex-col gap-1">
    <span>{{ title }}</span>
    <select :name=name @input="$emit('update:modelValue',$event.target.value)">
        <option 
        value=""
        :selected = "modelValue === '' || modelValue === ' ' || modelValue==='notSelected'"

        >Не указано</option>

        <option 
            v-for="data in dataElems" 
            :value=data.name 
            :selected = "modelValue === data.name"
            >
            {{ data.title }}
        </option>
    </select>
</label>
{{ modelValue }}
</template>
<script setup>

defineProps(['title', 'name', 'dataElems','modelValue'])

</script>