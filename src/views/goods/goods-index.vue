<template>
  <div class="app-container">
    <p>this is goods Index</p>
    <GoodsPanelGroup />
  </div>
</template>

<script>
import GoodsPanelGroup from './goods-index-components/GoodsPanelGroup'

export default {
  name: 'GoodsIndex',
  components: {
    GoodsPanelGroup
  },
  data() {
    return {
      goodsList: [],
      brandList: [],
      classifyList: []
    }
  }
}
</script>

<style scoped>

</style>
