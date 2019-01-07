<template>
  <div>
    <app-header v-bind:title="heading" v-on:changeTitle="updateTitle($event)"></app-header>
    <!-- <h2>{{heading}}</h2> -->

    <form-helper>
      <!-- slot has to have the same name as defined in the formHelper.vue -->
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Info about the form</p>      
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="text" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
      <h2 slot="text">Some parag for the slot</h2>
    </form-helper>

    <app-programmers v-bind:ninjas="ninjas"></app-programmers>
    <ninjas></ninjas>
    <sailors></sailors>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
// Registering component locally
import sailors from './components/sailors.vue';
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Programmers from './components/programmers.vue';
import formHelper from './components/formHelper.vue';


export default {
  components: {
    'sailors': sailors,
    'app-header': Header,
    'app-footer': Footer,
    'app-programmers': Programmers,
    'form-helper': formHelper,
  },
  data() {
    return {
      heading: 'Some heading',
      title: "A title for the form",
      ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ]
    }
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style scoped>
  h2 {
    color: blue;
  }
</style>
