<template>
  <div class="layout-container">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件，比如 page3 -->
    </router-view>
    <!-- <van-nav-bar :title="Router.home.meta.title" left-text="返回" left-arrow @click-left="onClickLeft"/> -->
  </div>
</template>
<style lang="less" scoped>
.layout-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // margin: auto;
  background: rgba(245, 245, 249, 1);
}
</style>
