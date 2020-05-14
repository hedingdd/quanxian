<template>
  <div id="app">
        <!-- <div class="navInfo">
            <div class="title">
                <img src="./static/images/head.png" alt="">
                <span>权限管理</span>
            </div>
            <div class='info'>
                <div class="userName">
                    <img src="./static/images/user.png" alt="">
                    <span>当前用户：张三</span>
                </div>
                <div class="exit">
                    <img src="./static/images/exit.png" alt="">
                    <span>退出</span>
                </div>
            </div>
        </div> -->
    <!-- <contents></contents> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import contents from './components/contents'
export default{
  // components: {contents}
}
</script>

<style lang="less">
</style>
