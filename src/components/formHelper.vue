<template>
  <div>
    <h1>SLOTS explained. Please fill out our form...</h1>
    <form>
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
      <div id="useful-links"></div>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
    </form>
  </div>
</template>

<script>


export default {
  props: {
    title: {
      type: '', 
     
    }
  },
  data() {
    return {
      
    }
  },
  
}
</script>


<style scoped>
  
</style>
