<template>
<label class="w-full flex flex-col gap-1">
    <div 
    :class="{'flex flex-row justify-between items-center': error }">
        <span>{{ title }}</span>
        <span v-if="error" class="text-red-600 text-sm font-bold">{{ error }}</span>
    </div>
    <select 
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 "
    :class="{ 'border-red-600': error }"
    :name=name 
    @blur="$emit('blur', modelValue)"
    @input="$emit('update:modelValue',$event.target.value)"
    >
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
</template>
<script setup>

defineProps(['title', 'name', 'dataElems','modelValue','error'])

</script>