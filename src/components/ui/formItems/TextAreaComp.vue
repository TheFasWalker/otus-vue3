<template>
<label class="w-full flex flex-col gap-1">
    <span>{{ title }}</span>
    <textarea 
    :name="name" 
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue',$event.target.value)"
    class=" resize-none h-32 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
    ></textarea>

</label>
</template>
<script setup>
defineProps(['modelValue','name','title','val','placeholder'])

</script>