<template>
<label class="w-full flex flex-col gap-1">
    <div 
        :class="{'flex flex-row justify-between items-center': error }"
        >
            <span class="block mb-2 text-lg font-bold text-gray-900" >{{ title }}</span>
            <p class="text-red-600 text-sm font-bold" v-if="error">
                {{ error }}
            </p>
        </div>
    <textarea 
    :name="name" 
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue',$event.target.value)"
    class=" resize-none h-32 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
    :class="{ 'border-red-600': error }"
    ></textarea>

</label>
</template>
<script setup>
defineProps(['modelValue','name','title','val','placeholder','error'])

</script>