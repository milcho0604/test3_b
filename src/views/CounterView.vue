<template>
    <div>
      <CounterChildView :num="num" />
      <button type="button" @click="num++">++</button>
    </div>
  </template>
  
  
  
  <script>
import CounterChildView from './CounterChildView.vue';
  export default {
    name: "CounterView",
    components :{ CounterChildView },
    data() {
    return {
      num: 0
    };
  },
  }
  </script>
  
  <style scoped>
div{ margin-left : 250px;}
  </style>