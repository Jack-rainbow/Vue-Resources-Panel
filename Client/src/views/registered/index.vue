<template>
  <div class="layout-login">
    <div class="layout_main">
      <el-form :model="form" status-icon :rules="rules" ref="loginForm" class="login-content">
        <el-form-item label="" prop="email">
          <el-input placeholder="请输入邮箱" v-model.trim="form.email"></el-input>
        </el-form-item>
        <el-form-item label="" prop="username">
          <el-input placeholder="请输入用户名" v-model.trim="form.username"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            placeholder="密码"
            type="password"
            v-model.trim="form.password"
            show-password
            @keyup.enter.native="login"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="login"
            :loading="loading"
            size="medium"
            class="login-button primary-button"
            >注册</el-button
          >
        </el-form-item>
        <div class="el-divider--horizontal"></div>
        <el-form-item class="auto-form">
          <div class="item__content">
            <el-button type="text" @click="loginBtn">已有账号？去登录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registered',
  data() {
    const validateEmail = (rules, value, callback) => {
      if (!value) {
        callback('请输入邮箱');
      } else {
        callback();
      }
    };
    const validateUserName = (rules, value, callback) => {
      if (!value) {
        callback('请输入用户名');
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
        username: 'pms1',
        password: 'abcd1234',
        email: '987709173@qq.com'
      },
      rules: {
        email: [
          {
            validator: validateEmail,
            trigger: 'blur',
            required: true,
          },
        ],
        username: [
          {
            required: true,
            validator: validateUserName,
            trigger: 'blur'
          }
        ],
        password: [
          {
            validator: validatePsw,
            required: true,
            trigger: 'blur'
          }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;

        } else {
          return false;
        }
      });
    },
    loginBtn() {
      this.$router.push('/login');
    }
  }
};
</script>
<style lang="less" scoped>
.layout-login {
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #f0f2f5;
  background-image: url(../../static/img/bg_login.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  //主要内容
  .layout_main {
    width: 450px;
    top: 50%;
    left: 50%;
    position: absolute;
    padding: 50px 0 20px;
    background: #fff;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
    .login-content {
      width: 300px;
      margin: auto;
      .auto-form{
        .item__content{
          display: flex;
        }
        .forget-pass{
          text-align: right;
        }
      }
      .login-way{
        text-align: left;
        min-width: 200px;
        li{
          padding: 0 5px;
          display: inline-block;
        }
      }
      .el-divider--horizontal{
        display: block;
        height: 1px;
        width: 100%;
        margin: 24px 0;
        background-color: #dcdfe6;
      }
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
    border-radius: 5px;
  }
}
</style>
