<script setup>
import ToggleTokenConponent from '../../TemporaryFiles/ToggleTokenConponent.vue';
import DropDown from '../../ui/sidebar/DropDown.vue';
import SidebarMainLink from './sidebarMainLink.vue';


</script>

<template>
    <aside
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform  bg-white border-r border-gray-200 translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
        <ul class="space-y-2">
          <li>
          <SidebarMainLink
            title="Главная"
            nav="home"
          />
          </li>
          <li>
            <SidebarMainLink
            title="О нас"
            nav="about"
          />
          </li>
          <li>
            <SidebarMainLink
            title="Каталог"
            nav="catalog"
          />
          </li>

          <li>
          <DropDown/>
          </li>


        </ul>

      <ToggleTokenConponent/>
      </div>

    </aside>
</template>
<style >

</style>
