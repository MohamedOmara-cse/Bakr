<script setup>
import login from "../helper/crudOperation";
import { ref, onMounted, reactive } from "vue";

const state = reactive({ emailOrUsername: "", password: "", alert: "" });

// Log in with the form's email/username and password

async function loginWithPassword() {
  let body = { email: state.emailOrUsername, password: state.password };
  let response = await login(body);
  console.log(response);
  if (response.status == "success") {
    localStorage.setItem(
      "token",
      response.authorisation.type + " " + response.authorisation.token
    );
    window.location.href = "/";
  } else {
    console.log("user name or password is incorrect");
    state.alert = "user name or password is incorrect";
  }
}
</script>
<template>
  <div id="app">
    <h1>Log In</h1>
    <div id="alert" v-if="state.alert">{{ state.alert }}</div>
    <form @submit.prevent="loginWithPassword">
      <label>
        Email or username
        <input type="text" v-model="state.emailOrUsername" />
      </label>
      <label>
        Password
        <input type="password" v-model="state.password" />
      </label>
      <button type="submit">Log in</button>
    </form>
    <a href="/register">Signup</a>
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
