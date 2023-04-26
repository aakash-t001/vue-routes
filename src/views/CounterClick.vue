<template>
  <h2>Counter Click on button</h2>
  <button @click="increments">Click {{ count }}</button>
</template>
<script>
import counter from "@/mixins/counter";
export default{
  data(){
    return{
      count:100
    }
  },
mixins:[counter]
}

</script>

<style>

</style>