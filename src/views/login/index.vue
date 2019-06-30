<template>
  <div class="layout-login">
    <h1 class="layout_title">
        <img
          class="logo-login"
          src="https://deepexi.oss-cn-shenzhen.aliyuncs.com/xpaas-console/logo_SPaaS_black.png"
          alt=""
        />
    </h1>
    <div class="layout_main">
      <el-form :model="form" status-icon :rules="rules" ref="loginForm" class="login-content">
        <el-form-item label="" prop="code">
          <el-input
            placeholder="租户ID"
            type="code"
            v-model.trim="form.code"
            auto-complete="off"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item label="" prop="username">
          <el-input placeholder="用户名/邮箱" v-model.trim="form.username"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            placeholder="密码"
            type="password"
            v-model.trim="form.password"
            auto-complete="off"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="login"
            :loading="loading"
            size="medium"
            class="login-button primary-button"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="buttom-wrapper font-s text-center ">
      <copyright></copyright>
    </div>
  </div>
</template>


<script>
import Copyright from '../../components/copyright/index';

export default {
  name: 'login',
  head() {
    return {
      title: 'XX系统登录',
    };
  },

  data () {
    const validateUserName = (rules, value, callback) => {
      if (!value) {
        callback('请输入账号');
      } else {
        callback();
      }
    };
    const validatePsw = (rules, value, callback) => {
      if (!value) {
        callback('请输入密码');
      } else {
        callback();
      }
    };

    return {
      loading: false,
      form: {
        username: '',
        password: '',
        code: '',
      },
      rules: {
        username: [
          {
            validator: validateUserName,
            trigger: 'blur',
          },
        ],
        password: [
          {
            validator: validatePsw,
            required: true,
            trigger: 'blur',
          },
        ],
        code: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入租户ID',
          },
        ],
      },
    };
  },
  components: {
    Copyright
  },
  methods: {
    login() {

    },
    toSignUp() {
      this.$router.push('/');
    },
  },
}

</script>
<style lang="less" scoped>
.layout-login{
  position: absolute;
  padding: 8% 0 0;
  width: 100%;
  min-height: 100%;
  background-color: #f0f2f5;
  background-image: url(https://deepexi.oss-cn-shenzhen.aliyuncs.com/xpaas-console/bg_login.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .logo-login {
    width: 260px;
    vertical-align: middle;
  }
  //标题
  .layout_title {
    position: relative;
    height: 34px;
    line-height: 34px;
    margin: 0 auto 45px;
    text-align: center;
    font-size: 38px;
    font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-weight: 500;
  }
  //主要内容
  .layout_main{
    width: 450px;
    margin: 0 auto 100px;
    padding: 50px 0 20px;
    background: #fff;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  }
  // 底部copy
  .buttom-wrapper {
    width: 100%;
    position: absolute;
    bottom: 41px;

    .buttom-link {
      height: 17px;
      line-height: 17px;
      margin-bottom: 11px;

      a {
        color: rgba(255, 255, 255, 1);
      }

      .service-item {
        margin: 0 24px;
        cursor: pointer;
      }
    }

    .copyright {
      height: 17px;
      line-height: 17px;
      font-size: 12px;
      color: #606266;
    }
  }
  .el-form {
    width: 100%;
    margin: auto;
  }

  .el-button {
    width: 300px;
    margin: auto;
    display: block;
    height: 40px;
    border-radius: 35px;
  }
}
</style>
