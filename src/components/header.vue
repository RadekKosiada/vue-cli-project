<template>
  <header>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
import {bus} from '../main';
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      firstTitle: 'Some super component as a header'
    }
  },
  methods: {
    changeTitle: function() {
      // change the title locally
      // this.title = 'Vue Wizards'

      // change title globally
      //we emit this event to the parent element
      // changeTitle is the name of the methods, VueWizard is the new string;
      // this.$emit('changeTitle', 'VueWizards');

      // we have to still do this here, because the event won't be fired here, it will be emitted further
      this.title = 'Vue Wizards';
      // emit the event with the event bus
      bus.$emit('titleChanged', 'Vue Wizards');

    }
  }
}
</script>


<style scoped>
  header {
    background: lightgreen;
    padding: 10px;
  }

  h1 {
    color: #222;
    text-align: center;
    cursor: pointer;
  }
</style>
