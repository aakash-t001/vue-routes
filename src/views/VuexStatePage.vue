<template>
<h2>This is VueXStatePage</h2>
<!--  <p>{{$store.state.counter}}</p>-->
  <P>{{$store.getters.getCounter}}</P>
  <p>Normalized:{{$store.getters.getNormalizedCounter}}</p>
  <button @click="increment">Increment</button>
</template>
<script>
export  default {
  methods:{
    // increment(){
    //   this.$store.state.counter++
    // }

    // /* This is mutations Commit
    increment(){
      this.$store.commit('increment',10)
    }

  }
}
</script>
<style>

</style>