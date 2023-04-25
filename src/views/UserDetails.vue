<template>
  <h3>This is User Details Page</h3>
  <p>User :{{id}} {{name}} {{contact}}</p>
</template>
<script>
export default {
  props:['id'],
  computed:{
    name(){
      return this.$route.query.name
    },
    contact(){
      return this.$route.query.contact
    }
  }
}
</script>