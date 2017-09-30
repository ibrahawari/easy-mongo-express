<template>
  <div class="codons">
    <h1>Codons</h1>
    <h4>
      Synonymous codons are distinct 3‐nucleotide codons that code for the same amino acid. While synonymous codons are used interchangeably, they are not used equally frequently within coding regions of the genome. This Python program analyzes the codon usage in the human genome based on a sampling of RNA transcript sequences.  Each transcript sequence must be provided in a file following FASTA format. The nucleotide position in the file of the start codon must be provided as well. The program accepts one or more file name and start position pairs. The output of the program is a list of the 20 amino acids and "Stp". For each amino acid, it lists the synonymous codons, and the number of times it was seen within the supplied coding sequences, and the percent utilization of this codon among all its synonymous codons.
    </h4>
    <h4 v-for="codon in codons">
      {{ codon.name }}
      <div v-for="codon in codon.data">
        {{ codon }}
      </div>
    </h4>
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

h1, h4 {
  text-align: left
}

</style>

