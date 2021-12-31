<template>
  <div class="container">
    <Cavecera></Cavecera>
    <Frutas></Frutas>
  </div>
</template>

<script>
import Cavecera from "./components/Cabbecera.vue";
import Frutas from "./components/Frutas.vue";

export default {
  name: "App",
  components: {
    Cavecera,
    Frutas,
  },
};
</script>
