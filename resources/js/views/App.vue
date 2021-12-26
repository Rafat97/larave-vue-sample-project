<template>
  <div>
    <div class="">
      <!-- <Header></Header> -->
      <sidebar-component></sidebar-component>

      <div class="relative md:ml-72 bg-blueGray-100 m-3">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import SidebarComponent from "../components/Sidebar.vue";
export default {
  components: {
    Header,
    SidebarComponent,
  },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>

