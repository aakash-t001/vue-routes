<template>
  <h3>This is User Page</h3>
  <p v-for="data in users" :key="data.id">
    <router-link :to="{
      name:'user-details',
      params:{
        id:data.id,
      },
      query:{
          id:data.id,
          name:data.name,
          contact:data.contact
      }
    }">({{data.id}}) ({{data.name}})</router-link>
  </p>
  <hr>
  <router-view/>
</template>
<script>
export  default {
  beforeRouteLeave(){
    const reply=window.confirm('You Have not views User Details You Can Leave This Page?')
    if (!reply){
      return false
    }
  },
  data(){
    return{
      users:[
        {id:1,name:'Akash',contact:'9876543210'},
        {id:2,name:'Anuj',contact:'1234567890'},
        {id:3,name:'Ankit',contact:'1122334455'},
        {id:4,name:'Sonu',contact:'6677889900'}
      ]
    }
  }
}
</script>