<template>
    <div class="container">
        <van-nav-bar class="head-title"  title="首页">
            <van-icon style="color:#fff;" name="chat" slot="right" />
        </van-nav-bar>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 1.3rem;
  text-align: center;
  margin: 0 auto;
  .head-title {
    // background: url(../../assets/img/Rectangle.png) 2rem 10.8rem no-repeat;
    background: #0af;
    color: #fff;
  }
}
</style>
