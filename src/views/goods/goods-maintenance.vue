<template>
  <div class="app-container">
    This is goods maintenance
    <el-button type="button" @click="changeWidth" />
    <el-row style="height: 500px;border:2px solid red;">
      <el-col :span="span" class="goodsTable">
        <div>
          table
        </div>
      </el-col>

      <el-col v-show="show" :span="12" style="background-color: #aaaaaa;height: 500px; float: left;">
        <div>
          desp
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'GoodsMaintenance',
  data() {
    return {
      span: 24,
      show: false
    }
  },
  methods: {
    changeWidth() {
      this.span = this.span === 24 ? 12 : 24
      this.show = !this.show
    }
  }

}
</script>

<style scoped>
.goodsTable{height: 500px;border:2px solid black;}
.details{
background-color: #aaaaaa;height: 500px; float: left;
}
</style>
