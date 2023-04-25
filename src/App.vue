<template>
  <div>
    <router-link :to="{ name: 'HomePage' }">Home</router-link> |
    <router-link :to="{ name: 'UserPage' }">User</router-link> |
    <router-link :to="{ name: 'UserLoginView' }">User Login View</router-link> |
    <router-link :to="{ name: 'VuexStatePage' }">Vuex State Management</router-link> |
  </div>
  <router-view />
  <router-view name="users"/>

<!--  <p>-->
<!--    <button @click="$router.go(-1)">Go Back To Last Step</button>-->
<!--    <button @click="$router.go(+1)">Go Forward To Next Step</button>-->

<!--    <button @click="$router.push('/user/check/1')">Redirect to Mention page</button>-->
<!--  </p>-->
</template>

<script>

</script>

<style>
  .router-link-exact-active{
    color: red;
  }
</style>
