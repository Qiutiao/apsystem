<template>
  <div id="app">
    <el-container class="page-container">

      <!-- 标题栏开始 -->
        <el-header height = "100px">
          <header-bar />
        </el-header>
        <!-- 标题栏结束 -->

      <el-container>
        <!-- 主要页面开始 -->
        <el-main class="window-view">
            <router-view :key="key" />
        </el-main>
        <!-- 主要页面结束 -->
      </el-container>

    </el-container>

    <!-- 登录注册开始 -->
    <Login />
    <!-- 登陆注册开始 -->

  </div>
</template>

<script>
import HeaderBar from './components/PublicComponents/HeaderBar.vue';
import Login from './components/PublicComponents/Login/index.vue';

export default {
  name: 'App',
  components: {
    HeaderBar,
    Login
  },
  data() {
    return {

    };
  },
  computed: {
    key() {
      return this.$route.fullPath;
    }
  }
}

</script>

<style lang="less">
  #app {
  .page-container {
    /deep/ .el-main {
      padding: 0px;
    }
  }
}
.window-view {
  min-height: calc(~"100vh - 60px");
  width: calc(~"100vw - 65px");
  overflow: auto;
  background: #fff;
}
</style>
