<template>
  <div>
    <div v-for="m in menuList" :key="m.id" class="menu-item">
      <el-menu-item :index="m.url" v-if="!m.subs">
        <i :class="m.icon"></i>
        <span slot="title" class="item-title">{{ m.title }}</span>
      </el-menu-item>

      <el-submenu v-else :index="m.id + ''">
        <template slot="title">
          <i :class="m.icon"></i>
          <span class="sub-menu-title">{{ m.title}}</span>
        </template>
        <menu-item :menuList="m.subs"></menu-item>
      </el-submenu>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MenuItem',
  components: {
  },
  props: {
    menuList: {
      type: Array,
    },
  },
  methods: {
    checkUrl(urlString) {
      const reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
      return urlString && reg.test(urlString);
    },
  },
};
</script>
<style lang="less">
.menu-item {
   user-select: none;
   text-align: left;
  .menu-item-img {
    width: 16px;
    margin-right: 3px;
  }
}
</style>
