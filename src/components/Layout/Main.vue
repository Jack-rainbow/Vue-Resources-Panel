<template>
    <div class="container">
        <tags />
        <div class="contents">
        <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
        </transition>
        </div>
    </div>
</template>

<script>
import Copyright from '../../components/Copyright/index';
import Tags from './components/Tags';

export default {
  data () {
    return {
    };
  },

  components: {
    Tags,
  },
}

</script>
<style lang='less' scoped>
</style>