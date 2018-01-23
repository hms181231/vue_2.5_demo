<template>
<div>
  <ul>
    <li v-for="(elem, index) of data" :key="index" v-text="elem"/>
  </ul>
  <input type="text" v-model="doubi"/>
</div>
</template>

<script>
export default {
  name: 'tables',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    doubi: String
  },
  model: {
    prop: 'doubi',
    event: 'input'
  }
};
</script>


<style lang="scss" scoped>

</style>
