<template>
  <div class="aside">
    <el-menu
        :default-active="onRoutes"
        class="el-menu-vertical"
        @open="handleOpen"
        @close="handleClose"
        active-text-color="#bdb7ff"
        router
        :collapse="isCollapse"
      >
      <scrollbar wrap-class="scrollbar-wrapper" :noresize="false">
        <menu-item :menuList="items"></menu-item>
      </scrollbar>
      </el-menu>
  </div>
</template>

<script>
import Scrollbar from '@/components/Scrollbar/index.js';
import MenuItem from '@/components/MenuItem/index';

export default {
  data() {
    return {
      collapse: false,
      // 配置目录
      items: [
        {
          icon: 'el-icon-edit-outline',
          index: 'home',
          title: '系统首页'
        },
        {
          icon: 'el-icon-edit-outline',
          index: 'icon',
          title: '自定义图标'
        },
        {
          icon: 'el-icon-edit-outline',
          index: 'component',
          title: '组件',
          subs: [
            {
              index: 'editor',
              title: '富文本编译器'
            },
            {
              index: 'countTo',
              title: '数字滚动',
              subs: [
                {
                  index: 'editor',
                  title: '富文本编译器'
                },
                {
                  index: 'countTo',
                  title: '数字滚动',
                  subs: [
                    {
                      index: 'editor',
                      title: '富文本编译器'
                    },
                    {
                      index: 'countTo',
                      title: '数字滚动'
                    },
                  ]
                },
              ]
            },
            {
              index: 'trees',
              title: '树形控件',
              subs: [
                {
                  index: 'tree',
                  title: '自定义树'
                },
                {
                  index: 'treeSelect',
                  title: '下拉树'
                }
              ]
            }
          ]
        },
        {
          icon: 'el-icon-edit-outline',
          index: 'draggable',
          title: '拖拽',
          subs: [
            {
              index: 'draglist',
              title: '拖拽列表'
            },
            {
              index: 'dragtable',
              title: '拖拽表格'
            }
          ]
        },
        {
          icon: 'el-icon-edit-outline',
          index: 'charts',
          title: '图表',
          subs: [
            {
              index: 'cricle',
              title: '饼图'
            }
          ]
        },
        {
          icon: 'el-icon-edit-outline',
          index: '7',
          title: '错误处理',
          subs: [
            {
              index: 'permission',
              title: '权限测试'
            },
            {
              index: '404',
              title: '404页面'
            }
          ]
        }
      ]
    };
  },
   components: {
    Scrollbar,
    MenuItem
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '');
    },
    isCollapse() {
      return !!this.collapse;
    }
  },
  methods: {
    // 下拉展开
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    // 下来关闭
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less">
.aside {
  transition: width 0.28s;
  width: 200px !important;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 60px;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  box-shadow: 1px 0 6px rgba(0, 21, 41, 0.35);
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }
  .scrollbar-wrapper {
    height: calc(100vh - 0px - 100px);
    overflow-x: hidden !important;
    margin-bottom: 0 !important;

    .el-scrollbar__view {
      height: 100%;
    }
  }
  .el-scrollbar__bar.is-vertical {
    right: 0;
  }

  .is-horizontal {
    display: none;
  }

  .fix-btn-wrap {
    height: 50px;

    .collapse-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      width: 100%;
      background: rgba(240, 242, 245, 1);
      cursor: pointer;
    }

    .btn-icon {
      transform: rotate(180deg);
      font-size: 16px;
    }
  }

  // 折叠
  &.hideSidebar {
    width: 64px !important;

    .scrollbar-wrapper {
      height: calc(100vh - 60px - 50px);
    }

    .el-submenu__title {
      text-align: center;
    }

    // 有子菜单
    .sub-menu-title,
    .el-submenu__icon-arrow {
      display: none;
    }

    [class*='icon'] {
      font-size: 16px;
      margin: 0;
    }

    .fix-btn-wrap {
      .btn-icon {
        transform: rotate(0deg);
      }
    }
  }

  .menu--vertical {
    > .menu--popup {
      max-height: 100vh;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 20px;
      }
    }
  }

}

</style>
