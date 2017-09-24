import api from '@/services/api'

export default {
  fetchPosts () {
    return api().get('posts')
  },

  addPost (params) {
    return api().post('posts', params)
  }
}
