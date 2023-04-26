<template>
  <h2>Counter Click on button</h2>
  <button @mouseover="increments">Hover {{ count }}</button>
</template>
<script>
import counter from "@/mixins/counter";
export default{
  data(){
    return{
      count:200
    }
  },
  mixins:[counter]
}

</script>

<style>

</style>