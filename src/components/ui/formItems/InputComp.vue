<template>
    <label class="w-full flex flex-col gap-1">
        <div 
        :class="{'flex flex-row justify-between items-center': props.error }"
        >
            <span class="block mb-2 text-lg font-bold text-gray-900" >{{ props.title }}</span>
            <p class="text-red-600 text-sm font-bold" v-if="props.error">
                {{ props.error }}
            </p>
        </div>

        <input 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 "
        :class="{ 'border-red-600': props.error }"
        :type=props.type 
        :placeholder="props.placeholder"
        :value="props.modelValue"
        :name="props.name"
        @input="$emit('update:modelValue',$event.target.value)"
        @blur="$emit('blur', props.modelValue)"
        >

    </label>
</template>
<script setup>
    const props= defineProps([ 'modelValue','title','name','val','type','placeholder','error','errorMessage'])

</script>