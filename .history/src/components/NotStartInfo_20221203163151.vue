<template>
  <p>{{nowdate}}</p>
</template>

<script>
export default {
  name:'NotStartInfo',
  data() {
    return {
    }
  },
  computed:{
    nowdate() {
      let Timestamp = new Date()
      let weekday = '周'+"日一二三四五六".charAt(Timestamp.getDay())
      let date = Timestamp.toLocaleDateString()
      return  date+weekday
    }
  },
  methods: {

  }

}
</script>