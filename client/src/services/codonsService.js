import api from '@/services/api'

export default {
  getJSON (params) {
    return api().post('codons', params)
  }
}
