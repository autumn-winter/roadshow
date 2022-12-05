<template>
  <p>{{nowdate}}</p>
</template>

<script>
export default {
  name:'NotStartInfo',
  data() {
    return {
      nowdate: '', 
    }
  },
  computed:{
    nowdate() {
      return new Date().toLocaleDateString().replace(/\//g, "-"); 
    }
  },
  methods: {

  }

}
</script>