<template>
  <div class="users">
    <h1>Users</h1>
    This file will list all the users.
    <div v-for="user in users">
      <p>
        <span><b>{{ user.firstName }}</b></span><br />
        <span>{{ user.lastName }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import usersService from '@/services/usersService'
export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      const response = await usersService.fetchUsers()
      this.users = response.data
    }
  }
}
</script>

<style scoped>

</style>


