<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">        
        <h2>{{ninja.name}}</h2>
        <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  // when we call it here, we can use it the same way as if it was defined in the data below;
  // we can use it in the template (above) and in the methods (below);
  // TWO WAYS
  // one
  // props: ['ninjas'],
  // two, that define what type of data we are about to receive;
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    // test: function() {
    //   this.ninjas
    // }
  },
  // lifecycle hooks
  // beforeCreate() {
  //   alert('beforeCreate');
  // },
  // created() {
  //   alert('created');
  //   // good point to fetch any data, if we need them(!)
  //   // some people do that in mounted;
  // },
  // beforeMount() {
  //   alert('beforeMount');
  // },
  // mounted() {
  //   // also good point to manipulate the DOM
  //   alert('mounted');
  // },
  // beforeUpdate() {
  //   // if Vue detects a change, it will occur here
  //   //and Vue will run this, before the DOM is updated;
  // alert('beforeUpdate');
  // },
  // updated() {
  //   alert('updated');
  // }
}
</script>

<style scoped>
  #ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}

</style>