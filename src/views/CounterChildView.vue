<template>
    <p>{{ num }}</p>
 </template>
 
 <script> 
 export default {
   name: "CounterChildView",
   props: ['num'],
   data() {
     return {
     }
   }
 }
 </script>
 
 <style scoped>
p{font-size : 30px;}
 </style>
 