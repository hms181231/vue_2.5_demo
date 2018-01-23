<template>
  <div>
    <ul>
      <li v-for="(elem, index) of data" :key="index" v-text="elem"/>
    </ul>
    <input type="text" v-model="meizhi"/>
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
  data: () => ({
    test: ''
  }),
  model: {
    prop: 'doubi',
    event: 'input'
  },
  computed: {
    meizhi: {
      get() {
        return this.test;
      },
      set(val) {
        this.test = val;
        this.$emit(this.$options.model.event, val);
      }
    }
  }
};
</script>


<style scoped>

</style>
