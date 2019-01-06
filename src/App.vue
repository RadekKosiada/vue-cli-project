<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas>
    <sailors></sailors>
  </div>
</template>

<script>
// Registering component locally
import sailors from './components/sailors.vue';

export default {
  components: {
    'sailors': sailors
  },
  data() {
    return {
      title: "First vue file"
    }
  }
}
</script>

<style>

</style>
