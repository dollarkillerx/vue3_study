<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useMessage } from 'naive-ui';

import type {
  FormInst,
  FormItemInst,
  FormItemRule,
  FormRules
} from 'naive-ui';

// 定义接口
interface ModelType {
  age: string | null;
  password: string | null;
  reenteredPassword: string | null;
}

// 创建响应式对象并设置初始值
const model = reactive<ModelType>({
  age: null,
  password: null,
  reenteredPassword: null
});

const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);
const message = useMessage();

// 定义表单验证规则
const rules: FormRules = {
  age: [
    {
      required: true,
      message: '年龄不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    }
  ],
  reenteredPassword: [
    {
      validator: (rule: FormItemRule, value: string) => {
        if (value !== model.password) {
          return new Error('密码和重复密码不一致');
        }
        return true;
      },
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
const handleValidateButtonClick = () => {
  if (formRef.value) {
    formRef.value.validate((errors) => {
      if (!errors) {
        message.success('验证成功');
      } else {
        message.error('验证失败');
      }
    });
  }
};
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <n-form ref="formRef" :model="model" :rules="rules">
      <n-form-item path="age" label="年龄">
        <n-input v-model:value="model.age" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="password" label="密码">
        <n-input
            v-model:value="model.password"
            type="password"
            @input="handlePasswordInput"
            @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item
          ref="rPasswordFormItemRef"
          first
          path="reenteredPassword"
          label="重复密码"
      >
        <n-input
            v-model:value="model.reenteredPassword"
            :disabled="!model.password"
            type="password"
            @keydown.enter.prevent
        />
      </n-form-item>
      <n-row :gutter="[0, 24]">
        <n-col :span="24">
          <div style="display: flex; justify-content: flex-end">
            <n-button
                :disabled="model.age === null"
                round
                type="primary"
                @click="handleValidateButtonClick"
            >
              验证
            </n-button>
          </div>
        </n-col>
      </n-row>
    </n-form>
  </div>
</template>

<style scoped>
</style>
