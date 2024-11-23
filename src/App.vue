<template>
<MainLayout>
    <main class="p-4 md:ml-64 pt-20 h-[100vh] overflow-x-auto">
      <section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
        <router-view/>
      </section>
    </main>
  </MainLayout> 

</template>
<script setup>
import MainLayout from './components/general/Lauouts/MainLayout.vue';
</script>

<style></style>
