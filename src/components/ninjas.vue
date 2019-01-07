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

// scoped to keep the style only for this component; otherwise it changes all h1, h3 in the document regardless in what component they are
<style scoped>
  h1 {
    color: purple;
  }
  h3 {
    color: pink;
  }
</style>
