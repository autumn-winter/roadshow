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
      let date = Timestamp.toLocaleDateString().replace(/\//g, "-").split('-')[0]
      return  `${date}[0]年${date[1]}月${date[2]}日${weekday}`
    }
  },
  methods: {

  }

}
</script>