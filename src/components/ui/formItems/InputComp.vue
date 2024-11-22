<template>
    <label class="w-full flex flex-col gap-1">
        <span class="block mb-2 text-lg font-bold text-gray-900" >{{ props.title }}</span>
        <input 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 "
        :type=props.type 
        :placeholder="props.palaceholder"
        :value="props.modelValue"
        :name="props.name"
        @input="$emit('update:modelValue',$event.target.value)"
        >
    </label>
</template>
<script setup>
const props= defineProps([ 'modelValue','title','name','val','type','palaceholder'])

</script>