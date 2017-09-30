<template>
  <div>
    {{ codons }}
  </div>
</template>

<script>
import codonsService from '@/services/codonsService'
export default {
  name: 'codons',
  data () {
    return {
      codons: []
    }
  },
  mounted () {
    var params = [
      {file: 'insulin.fa', start: 60},
      {file: 'hemoglobinB.fa', start: 51},
      {file: 'rhodopsin.fa', start: 96},
      {file: 'collagen1.fa', start: 127}
    ]
    this.draw(params)
  },
  methods: {
    async draw (params) {
      const response = await codonsService.getJSON(params)
      this.codons = response.data
    }
  }
}
</script>

<style scoped>

</style>

