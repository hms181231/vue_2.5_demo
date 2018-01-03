import Vue from 'vue';
import axios from 'axios';
import ElementUI from 'element-ui';
import Login from '@/components/login';

Vue.use(ElementUI);

describe('login', () => {
  const Constructor = Vue.extend(Login);
  const vm = new Constructor({
    data() {
      return {
        message: '',
        formLabelAlign: {
          user: '',
          password: '',
        },
      };
    },
  }).$mount();
  it('login with resolves', () => {
    vm.formLabelAlign = {
      user: 'admin',
      password: '123456',
    };
    return axios.post('http://localhost:3001/api/login', vm.formLabelAlign).then(({ data }) => {
      expect(data.message).toBe('登录成功');
      vm.message = data.message;
    });
  });

  it('login with reject', () => {
    vm.formLabelAlign = {
      user: 'fsdfs',
      password: 'rewrwe',
    };
    return axios.post('http://localhost:3001/api/login', vm.formLabelAlign).then(({ data }) => {
      expect(data.message).toBe('用户名或密码不正确');
      vm.message = data.message;
    });
  });
});
