<template>
  <div class="head-container">
    <el-header>
      <div class="btn-fullscreen" @click="handleFullScreen">
        <el-tooltip effect="dark" :content="fullscreen ? `取消全屏` : `全屏`" placement="bottom">
          <i class="el-icon-rank head-icon"></i>
        </el-tooltip>
      </div>
      <div class="head-active">
        <img :src="userImg" class="userName-Img" alt="userName-Img" />
      </div>
      <el-dropdown>
        <i class="el-icon-setting head-icon" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
  </div>
</template>
<script>
// import ShowAside from './ShowAside'// 引入了一个侧边栏是否折叠的组件

export default {
  // name:'header',
  components: {
    // ShowAside,
  },
  data() {
    return {
      fullscreen: false,
      name: 'pms1',
      message: 2,
      username: 'pms1'
    };
  },
  computed: {
    userImg() {
      return 'https://deepexi.oss-cn-shenzhen.aliyuncs.com/xpaas-console/user-portrait.png';
    },
    isCollapse: {
      get: function() {
        return this.$store.state.isCollapse;
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.commit('IS_COLLAPSE', newValue); // 提交到vuex
      }
    }
  },
  methods: {
    toggleClick() {
      this.isCollapse = !this.isCollapse;
    },
    // 用户名下拉菜单选择事件
    logout() {
      this.$router.push('/login');
    },
    // 全屏事件
    handleFullScreen() {
      const element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen();
      }
      this.fullscreen = !this.fullscreen;
    }
  }
};
</script>

<style lang="less" scoped>
.head-container {
  background-color: #24292e;
}
.header-user-con {
}
.el-header {
  height: 60px;
  text-align: right;
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.head-icon {
  color: #fff;
  margin-right: 16px;
  font-size: 20px;
}
.head-active {
  margin-right: 10px;
  .userName-Img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>
