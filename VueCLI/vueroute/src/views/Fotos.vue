<template>
  <div>
    <h1>Gallery</h1>

    <router-link
      :to="{ name: 'fotos', params: { id: foto } }"
      v-for="(foto, index) of fotos"
      :key="index"
    >
      <button>foto {{ index + 1 }}</button>
    </router-link>

    <Foto />

    <button @click="back">Anterior</button>
    <button @click="home">Home</button>
    <button @click="next">Siguiente</button>
  </div>
</template>

<script>
import Foto from "@/components/Fotografia.vue";

export default {
  name: "Home",
  components: {
    Foto,
  },
  data() {
    return {
      fotos: [1, 2, 3],
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    back() {
      this.$router.go('-1');
    },
    next() {
      this.$router.go('1');
    }
  },
};
</script>
