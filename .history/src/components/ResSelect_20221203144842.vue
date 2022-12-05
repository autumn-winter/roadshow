<template>
  <div v-for="r,index in resCards" :key="index">
    <ResCard class="rescard" :imgsrc="r.imgsrc" :rname="r.rname" :note="r.note" :intro="r.intro"/>
  </div>
</template>

<script>
</script>

<style>
</style>