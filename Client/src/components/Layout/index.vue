<template>
  <div class="wrapper">
    <Header />
    <div class="main-container">
      <Aside class="aside-container" />
      <Main class="content-container" />
      <copy-right class="main-footer"></copy-right>
    </div>
  </div>
</template>

<script>
import Aside from './components/Aside.vue';
import Header from './components/Header.vue';
import Main from './Main.vue';
import CopyRight from '@/components/CopyRight/index.vue';
// import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Aside,
    Header,
    Main,
    CopyRight
  }
};
</script>
<style lang="less" scoped>
.main-container {
  .content-container {
    padding: 15px 10px 15px 20px;
    transition: margin-left 0.28s;
    margin-left: 200px;
    position: relative;
    background-color: #f7f8fb;
    min-height: calc(90vh - 80px);
  }
  .aside-container {
  }
  .main-footer {
    margin-left: 200px;
  }
}
</style>
