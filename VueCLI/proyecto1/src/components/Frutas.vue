<template>
  <div>
    <ul class="list-group">
      <li
        v-for="(fruta, index) of frutas"
        :key="fruta.id"
        @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ fruta.nombre }}
        <span class="badge bg-primary rounded-pill">{{ fruta.cantidad }}</span>
      </li>
    </ul>
    <button class="btn btn-danger" @click="reset">Reset</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Frutas",
  computed: {
    ...mapState(["frutas"]),
  },
  methods: {
    ...mapMutations(["aumentar", "reset"]),
  },
};
</script>
