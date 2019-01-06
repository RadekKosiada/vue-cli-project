<template>
  <div>
    <h3>Ninjas registered globally</h3>
    <ul>
      <li v-for="(ninja, index) in ninjas">{{ninja}}</li>
    </ul>   
  </div>
  
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
  h1 {
    color: purple;
  }
</style>
