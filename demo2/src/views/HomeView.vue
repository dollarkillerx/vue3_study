<template>
  <v-app style="height: 100%; width: 100%;">
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <NavBar></NavBar>
    </v-navigation-drawer>

    <v-app-bar color="teal darken-4" app>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Harbor Easy CICD</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="signOut">mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center" style="height: 100%;">
      <RouterView/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from "@/components/NavBar.vue";
import {RouterLink, RouterView} from 'vue-router'
import { useRouter } from 'vue-router';

const router = useRouter();
const drawer = ref(false)

function toggleDrawer() {
  drawer.value = !drawer.value
}

function signOut() {
  localStorage.removeItem("token");
  router.push("/login");
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}
</style>
