<template>
  <div class="home-container">
    我是demo
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      pageNum: 0,
      loading: false,
      finished: false,
      getList: null,
      isLoading: false,
      currentRate: [],
      images: []
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.home-container {
  height: 100vh;
  background: #d67575;
}
</style>
