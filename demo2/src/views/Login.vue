<template>
  <v-container class="login-container">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="deep-purple accent-4" dark flat>
            <v-toolbar-title>EasyCICD My Admin</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                  label="token"
                  name="token"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="token"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="deep-purple darken-1"  @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Login from '@/api/login'
import { useRouter } from 'vue-router';

const router = useRouter();
const token = ref('');

async function login() {
  console.log(`Logging in with email: ${token.value}`);
  // 实现登录逻辑
  const resp = await Login(token.value);
  if (!resp.success) {
    alert("密码错误");
    return;
  }

  localStorage.setItem("token",token.value);
  router.push('/dashboard');
}
</script>

<style scoped>
.login-container {
  background-image: url('@/assets/fjs.jpg');
  background-size: cover;
  background-position: center;
  height: 100%; /* Adjust based on your needs */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
</style>
