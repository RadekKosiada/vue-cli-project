<template>
  <div>
    <h3>Sailors registered locally</h3>
    <ul>
      <li v-for="(sailor, index) in sailors">{{sailor}}</li>
    </ul>   
  </div>
  
</template>

<script>

export default {
  name: 'sailors-component',
  data() {
    return {
      sailors: ['Pluto', 'Mickey', 'Minnie', 'Donald']
    }
  },
  components: {
    
  }
}
</script>

<style>

</style>
