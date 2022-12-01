<script setup>
import { ref, onMounted, reactive } from "vue";
import Card from "../components/Card.vue";
import Modal from "../components/Modal.vue";

const state = reactive({ movies: [], show: "" });
onMounted(() => {
  if (localStorage.getItem("token") != undefined) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://test-api.storexweb.com/api/movies", requestOptions)
      .then((response) => response.json())
      .then((result) => (state.movies = result.message))
      .then((result) => console.log(state.movies[0]))
      .catch((error) => console.log("error", error));
  } else {
    window.location.href = "/login";
  }
});
function hideModal() {
  state.show = false;
}
function show() {
  state.show = true;
  console.log("Show");
}
</script>

<template>
  <div class="movies">
    <section v-for="item in state.movies" :key="item">
      <Card v-if="item.image" @show="show" :data="item" />
    </section>

    <Modal @hide="hideModal" v-if="state.show" />
  </div>
</template>

<style scoped>
.movies {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
  .movies {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
}
</style>
