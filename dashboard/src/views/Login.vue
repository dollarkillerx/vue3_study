<script setup lang="ts">
import { ref, reactive,onMounted  } from 'vue';
import { useMessage } from 'naive-ui';
import {Login} from '@/api/login'
import {JWT}  from "@/utils/jwt";

import type {
  FormInst,
  FormItemInst,
  FormRules
} from 'naive-ui';
import router from "@/router";

// 定义接口
interface ModelType {
  token: string | null;
}

// 创建响应式对象并设置初始值
const model = reactive<ModelType>({
  token: null,
});

const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);
const message = useMessage();

// 定义表单验证规则
const rules: FormRules = {
  age: [
    {
      required: true,
      message: 'token不能为空',
      trigger: 'blur'
    }
  ]
};

// 处理密码输入事件
const handlePasswordInput = () => {
  if (rPasswordFormItemRef.value) {
    rPasswordFormItemRef.value.validate();
  }
};

// 处理验证按钮点击事件
const handleValidateButtonClick = async() => {
  if (formRef.value) {
    formRef.value.validate(async(errors) => {
      if (!errors) {
        // message.success('验证成功');
        // Login
        const token = await Login(model.token!);
        if (token.success) {
          message.success('登录成功');
          JWT.setToken(model.token!);
          router.push('/dashboard');
        }else{
          message.error(`登录失败 ${token.message}`);
        }

      } else {
        message.error('验证失败');
      }
    });
  }
};

onMounted(() => {
  if (JWT.getToken() != null) {
    router.push('/dashboard');
  }
});
</script>

<template>
  <div style="background-image: url('https://i.imgur.com/5yKKBU8.png');">
    <div class="flex justify-center items-center h-screen">
      <div class="flex  flex-col bg-white p-10 rounded-md shadow-2xl opacity-90">
        <h1 class="pb-2.5 text-xl">Easy CICD 管理系统</h1>
        <n-form ref="formRef" :model="model" :rules="rules">
          <n-form-item path="token" label="Token">
            <n-input v-model:value="model.token" @keydown.enter.prevent />
          </n-form-item>
          <n-row :gutter="[0, 24]">
            <n-col :span="24">
              <div style="display: flex; justify-content: flex-end">
                <n-button
                    :disabled="model.token === null"
                    round
                    type="primary"
                    @click="handleValidateButtonClick"
                >
                  登录
                </n-button>
              </div>
            </n-col>
          </n-row>
        </n-form>
      </div>
    </div>
  </div>

</template>

<style scoped>
</style>
