<script setup lang="ts">
import { PASSWORD_MIN_LENGTH } from "@/helpers/constants";
import { useAuthStore } from "@/stores/auth";
import { useFormValidation } from "@/plugins/validators";

const { t } = useI18n();
const authStore = useAuthStore();

const loginInfo = reactive({
  email: "",
  password: "",
  errors: {
    email: "",
    password: "",
  },
});

const { validatePasswordField, validateEmailField } = useFormValidation();

function onValidateEmail() {
  loginInfo.errors.email = validateEmailField(loginInfo.email);
}

function onValidatePassword() {
  loginInfo.errors.password = validatePasswordField(loginInfo.password);
}

function onValidate() {
  onValidateEmail();
  onValidatePassword();
  return loginInfo.errors.email && loginInfo.errors.password;
}

function onLogin() {
  if (!onValidate())
    authStore.onLogin();
}
</script>

<template>
  <div>
    <div class="flex justify-center h-screen">
      <div class="hidden bg-cover lg:block lg:w-2/3" />
      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="mx-auto flex-1">
          <div class="text-center text-xl">
            <p class="mt-3">
              {{ t('project.name') }} {{ t('login.title') }}
            </p>
          </div>

          <div class="mt-8">
            <form method="post">
              <div>
                <input
                  id="email" v-model="loginInfo.email" type="email" name="email"
                  :placeholder="t('login.input.placeholder.email')"
                  @keyup="onValidateEmail"
                  @blur="onValidateEmail"
                >
                <span v-if="loginInfo.errors.email" class="error-message">
                  {{ t(`${loginInfo.errors.email}`, { field: t('login.input.key.email') }) }}
                </span>
              </div>

              <div class="mt-6">
                <input
                  id="password" v-model="loginInfo.password" type="password" name="password"
                  :placeholder="t('login.input.placeholder.password')"
                  @keyup="onValidatePassword"
                  @blur="onValidatePassword"
                >
                <span v-if="loginInfo.errors.password" class="error-message">
                  {{ t(`${loginInfo.errors.password}`, { field: t('login.input.key.password'), min: PASSWORD_MIN_LENGTH }) }}
                </span>
              </div>

              <div class="mt-6">
                <button
                  class="w-full btn btn-primary"
                  type="button"
                  @click="onLogin"
                >
                  {{ t('login.button.login') }}
                </button>
              </div>
            </form>

            <div class="mt-4 text-center">
              <p class="mb-1">
                {{ t('login.description-0') }}
              </p>
              <p class="mb-1">
                {{ t('login.description-1') }}
              </p>
              <p> {{ t('login.description-2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-cover {
  background-image: url('@/assets/imgs/sign-in.png')
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
