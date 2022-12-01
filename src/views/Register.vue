<script setup>
import signup from "../helper/crudOperation";
import { ref, onMounted, reactive } from "vue";

const state = reactive({
  emailOrUsername: "",
  password: "",
  name: "",
  alert: "",
});

// Log in with the form's email/username and password

async function signupHandler() {
  let body = {
    name: state.name,
    email: state.emailOrUsername,
    password: state.password,
  };

  let response = await signup(body);
  console.log(response);
  if (response.status == "success") {
    localStorage.setItem(
      "token",
      response.authorisation.type + " " + response.authorisation.token
    );
    window.location.href = "/";
  } else state.alert = response.message;
}
</script>
<template>
  <div id="app">
    <h1>Register</h1>
    <div id="alert" v-if="state.alert">{{ state.alert }}</div>
    <form @submit.prevent="signupHandler">
      <label>
        Name:
        <input type="text" v-model="state.name" required />
      </label>
      <label>
        Email or username
        <input type="email" v-model="state.emailOrUsername" required />
      </label>
      <label>
        Password
        <input type="password" v-model="state.password" required />
      </label>
      <button type="submit">sign up</button>
    </form>
  </div>
</template>

<style scoped>
button,
input {
  display: block;
  margin-bottom: 10px;
}

#alert {
  color: red;
  margin-bottom: 10px;
}
</style>
