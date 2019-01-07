<template>
  <footer>
   <p>{{title}}</p>
  </footer>
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
      copyright: 'Some crazy component, footer, Courtesy by MJ'
    }
  },
  created() {
    bus.$on('titleChanged', (data) => {
      this.title = data;
    })
  }
}
</script>


<style scoped>
  footer {
    background: #222;
    padding: 6px;
  }

  p {
    color: lightgreen;
    text-align: center;
  }
</style>
