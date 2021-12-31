<template>
  <div class="about">
    <h2>Boton Default</h2>
    <Boton>Default</Boton><br>
    <h2>Outlined</h2>
    <Boton outlined>Default</Boton><br>
    <h2>Tipo text</h2>
    <Boton text>Default</Boton><br>
    <h2>Sin sombra</h2>
    <Boton disableShadow>Default</Boton><br>
    <h2>Boton desabilitado y desabilitado en tipo text</h2>
    <Boton disabled>Default</Boton>   <Boton disabled text>Default</Boton><br>
    <h2>Icono al inicio o al final del boton</h2>
    <Boton start>Default</Boton>    <Boton end>Default</Boton><br>
    <h2>Tamaño pequeño, mediano y grande</h2>
    <Boton sm>Default</Boton>   <Boton md>Default</Boton>   <Boton lg>Default</Boton><br>
    <h2>Boton primario, secundario y danger</h2>
    <Boton primary md>Default</Boton>   <Boton secondary md>Default</Boton>   <Boton danger md>Default</Boton><br>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    
  </div>
</template>
<script src="https://kit.fontawesome.com/89ac75cebc.js" crossorigin="anonymous"></script>
<script>
import Boton from "@/components/Boton.vue";
export default {
  name: "About",
  components: {
    Boton,
  },
}; 
</script>

<style>
  .btn {
    margin: 10px;
  }
  h2 {
    margin: 20px;
  }
</style>
