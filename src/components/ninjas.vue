<template>
  <ul>
    <li v-for="(ninja, index) in ninjas">{{ninja}}</li>
  </ul>   
  
</template>

<script>

export default {
  name: 'ninjas-component',
  data() {
    return {
      ninjas: ['Bartek', 'Iza', 'Hania', 'Czesiu']
    }
  },
  components: {
    
  }
}
</script>

<style>

</style>
