<template>
  <div>
    <div v-for="r,index in resCards" :key="index">
      <ResCard class="rescard" :res="r" next-to="/bookform"/>
    </div>
  </div>
</template>