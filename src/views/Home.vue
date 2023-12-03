<template>
    <h2>Welcome {{ user.name }}</h2>
</template>

<script>
  import { userService } from '../services/user.service';

  export default {
    data() {
      return {
        user: {}
      }
    },

    created() {
      this.user = userService.getUser()
    }
  }


</script>

<style>
</style>
