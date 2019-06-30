import axios from 'axios';
import {
  Loading,
} from 'element-ui';
import router from '../router/router';
import store from '../store/store';


// !  axios默认配置
axios.defaults.timeout = 60000; // 超时时间
axios.defaults.baseURL = process.env.BASE_URL; // 根据环境设置基础路径
axios.defaults.headers.post['Content-Type'] = // 设置编码
  'application/x-www-form-urlencoded;charset=UTF-8';

// ! axios 拦截
let loading = null; // 初始化loading
// ! 请求前拦截
axios.interceptors.request.use(
  (config) => {
    loading = Loading.service({
      text: '正在加载中......',
      fullscreen: true,
    });
    if (store.state.token) {
      config.headers['Authorization'] = `Bearer${store.state.token}`; // 身份令牌
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// ! 响应后拦截
axios.interceptors.response.use(
  (response) => {
    return new Promise((resolve, reject) => {
      if (loading) {
        loading.close();
      }
      const res = response.data;
      if (res.err_code === 0) {
        resolve(res);
      } else {
        reject(res);
      }
    });
  },
  (error) => {
    console.log(error);
    // 请求成功后关闭加载框
    if (loading) {
      loading.close();
    }
    // 断网处理或者请求超时
    if (!error.response) {
      // 请求超时
      if (error.message.includes('timeout')) {
        console.log('error', '请求超时，请检查互联网连接');
      } else {
        // 断网，可以展示断网组件
        console.log('error', '请检查网络是否已连接');
      }
      return;
    }
    const { status } = error.response;
    switch (status) {
      case 500:
        console.log('error', '服务器内部错误');
        break;
      case 404:
        console.log(
          'error',
          '未找到远程服务器',
        );
        break;
      case 400:
        console.log('error', '数据异常');
        break;
      case 401:
        // messages('warning', '用户登陆过期，请重新登陆');
        localStorage.removeItem('token');
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath,
            },
          });
        }, 1000);
        break;
      default:
        console.log('error', error.response.data.message);
    }
    return Promise.reject(error);
  },
);
