<template>
  <div @click="(e) => {e.preventDefault()}" class="loading-float">
    <div class="loading-container">
      <div class="loading-vant">
          <van-loading type="spinner"/>
      </div>
      <span class="loading-text">正在加载</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.loading-float {
  width: 100vw;
  height: 100vh;
  z-index: 99999999;
  position: fixed;
  // background: rgba(255, 255, 255, 0.9)
}
.loading-container {
  background: rgba(0, 0, 0, 0.4);
  width: 15vh;
  margin: auto;
  height: 15vh;
  text-align: center;
  // position: fixed;
  // z-index: 99999999;
  margin-top: 59%;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  .loading-text {
    color: #ccc;
    font-size: 0.4rem;
    margin-top: 2vh;
    color: #fff;
  }
  .loading-vant {
    display: flex;
    justify-content: space-around;
    margin-top: 3vh;
  }
}
</style>
