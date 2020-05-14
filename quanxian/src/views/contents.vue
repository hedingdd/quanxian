<template>
    <div class="page">
        <div class="navInfo">
            <div class="title">
              <div class="systemName">
                  <img src="../static/images/head.png" alt="">
                  <div class="titleName">权限管理系统</div>
              </div>
              <div>
                  <el-radio-group v-model="isCollapse">
                      <el-radio-button class="btnDisplay" :label="false" v-if="!toShow"> 
                        <img src="../static/images/display.png" alt=""  @click='toDisplay'>
                      </el-radio-button>
                      <el-radio-button class="btnDisplay" :label="true" v-if="toShow">
                          <img src="../static/images/display.png" alt="" @click='toDisplay'>
                      </el-radio-button>
                  </el-radio-group>
              </div>
            </div>
            <div class='info'>
                <div class="userName">
                    <img src="../static/images/user.png" alt="">
                    <span>当前用户：张三</span>
                </div>
                <div class="exit">
                    <img src="../static/images/exit.png" alt="">
                    <span>退出</span>
                </div>
            </div>
        </div>
        <div class='side' ref='side'>
            <el-menu default-active="/page1" :router='jump' class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :collapse-transition="false">
                <el-menu-item index="/page1">
                  <i class="el-icon-user"></i>
                  <span slot="title">导航一</span>
                </el-menu-item>
                <el-menu-item index="page2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="page3">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="page4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu> 
          </div>
          <div class="pageOne" ref='pageOne'>
              <router-view></router-view>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        jump: true,
        toShow:true,
        isCollapse: true
      };
    },
    watch:{
      toShow(newName, oldName){
        if(newName){
          this.$refs.side.style.width = '7%';
          this.$refs.pageOne.style.width = '93%'
        }else{
          this.$refs.side.style.width = '15%';
          this.$refs.pageOne.style.width = '85%'
        }
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toDisplay(){
        this.toShow = !this.toShow
      }
    }
  }
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }
//  /deep/ .el-menu-vertical-demo{
//     width: 100%;
//   }
  /* .side /deep/ .el-menu-vertical-demo{
    width: 100%;
  } */
  /deep/ .el-menu--collapse{
    width: 100%;
    text-align: center;

  }
  .btnDisplay /deep/ span{
    background: #fff !important;
    padding: 0px !important;
    border:none !important;
  }

  .btnDisplay img{
    width: 20px;
    height: 20px;
    margin-left: 20px;
  }
  .page{
    display: flex;
    flex-wrap: wrap;
  }
  .navInfo{
  height: 50px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom:1%;
  -webkit-box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
    box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
}
.info{
  display: flex;
}
.title{
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin:0 10px;
}
.title span{
  padding:0 20px;
}
.userName,.exit{
  font-size: 12px;
  display: flex;
  align-items: center;
}
.systemName{
  display: flex;
  align-items: center;
  width: 160px;
}
.titleName{
  margin: 0 10px;
  width: 100px;
  overflow: hidden;
}
.userName img,.systemName img{
  width: 30px;
  height: 30px;
}
.exit{
  margin-left: 20px;
}
.exit img{
  width:20px;
  height: 20px;
}
.side{
    width: 7%;
    text-align: left;
    transition: all 0.3s ease 0s
}
.pageOne{
  width: 93%;
  transition: all 0.3s ease 0s
}
</style>