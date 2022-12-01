<script setup>
const props = defineProps(["data"]);
console.log(props.data);
function deleteHandler() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  var formdata = new FormData();
  formdata.append("_method", "delete");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://test-api.storexweb.com/api/movies/" + props.data.id,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .then((result) => (window.location.href = "/"))
    .catch((error) => console.log("error", error));
}
</script>


<template>
  <div class="card">
    <img :src="'https://test-api.storexweb.com/' + props.data.image" />
    <h1>{{ props.data.name }}</h1>
    <h3>{{ props.data.description }}</h3>
    <div>
      <button @click="$emit('show', props.data)">Edit</button>
      <button @click="deleteHandler">Delete</button>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 300px;
}
</style>
