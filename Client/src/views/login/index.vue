<template>
  <div class="layout-login">
    <div class="layout_main">
      <el-form :model="form" status-icon :rules="rules" ref="loginForm" class="login-content">
        <el-form-item label="" prop="email">
          <el-input placeholder="请输入邮箱" v-model.trim="form.email"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model.trim="form.password"
            show-password
            @keyup.enter.native="login"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item class="auto-form">
          <div class="item__content">
            <el-checkbox v-model="isAutoLogin">自动登录</el-checkbox>
            <el-button type="text" class="forget-pass">忘记密码</el-button>
          </div>
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
        <el-form-item class="auto-form">
          <div class="item__content">
            <ul class="login-way">
              <li>其他登录方式</li>
              <li><i class="el-icon-news"></i></li>
              <li><i class="el-icon-goods"></i></li>
              <li><i class="el-icon-mobile-phone"></i></li>
            </ul>
            <el-button type="text" class="forget-pass" @click="registeredBtn">注册账户</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="buttom-wrapper font-s text-center ">
      <copy-right></copy-right>
    </div>
  </div>
</template>

<script>
import CopyRight from '@/components/CopyRight/index.vue';

export default {
  name: 'login',
  data() {
    const validateEamil = (rules, value, callback) => {
      if (!value) {
        callback('请输入邮箱');
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
      isAutoLogin: false,
      loading: false,
      form: {
        email: 'pms1',
        password: 'abcd1234',
      },
      rules: {
        email: [
          {
            validator: validateEamil,
            trigger: 'blur',
            required: true,
          }
        ],
        password: [
          {
            validator: validatePsw,
            required: true,
            trigger: 'blur'
          }
        ],
      }
    };
  },
  components: {
    CopyRight
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          const params = {
            username: this.form.username,
            password: this.form.password,
            channel: 'xPaaS',
            code: 'pms1'
          };

          this.$store
            .dispatch('loginByUser', params)
            .then(() => {
              this.loading = false;
              this.$router.push({
                path: '/dashboard'
              });
            })
            .catch(e => {
              // TODO 异常处理
              this.loading = false;
              console.log(e);
            });
        } else {
          return false;
        }
      });
    },
    registeredBtn(){
      this.$router.push('/registered');
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
    }
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
    border-radius: 5px;
  }
}
</style>
