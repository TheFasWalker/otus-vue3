<template>
      <div class="antialiased bg-gray-50 dark:bg-gray-900">
        <HeaderComp/>
        <Sidebar />
        <slot></slot>
    </div>
</template>
<script setup>
    import HeaderComp from '../HeaderComp.vue';
    import Sidebar from '../Sidebar.vue';
</script>