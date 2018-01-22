import { mount } from 'vue-test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Login from '@/components/login';

describe('login', () => {
  let wrapper;
  const AxiosMockAdapter = new MockAdapter(axios);

  beforeEach(() => {
    wrapper = mount(Login);
  });

  afterEach(() => {
    AxiosMockAdapter.reset();
  });

  it('快照html', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('模拟click', () => {
    const handlerSubmit = jest.fn();
    wrapper.setMethods({
      onSubmit: handlerSubmit,
    });
    const loginButton = wrapper.find('.el-button');
    loginButton.trigger('click');
    expect(handlerSubmit).toBeCalled();
  });

  it('timeout', async () => {
    expect.assertions(1);
    AxiosMockAdapter.onPost('http://localhost:3001/api/login').networkError();
    try {
      await wrapper.vm.onSubmit();
    } catch (error) {
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.message).toBe('网络问题');
      });
    }
  });

  it('用户密码为空登录', async () => {
    expect.assertions(3);
    wrapper.setData({
      formLabelAlign: {
        user: '',
        password: '',
      },
    });

    AxiosMockAdapter.onPost('http://localhost:3001/api/login', wrapper.vm.formLabelAlign).reply(
      200,
      {
        status: 500,
        data: null,
        message: '用户名或密码不正确',
      },
    );

    const result = await wrapper.vm.onSubmit();
    expect(result.data.status).toBe(500);
    expect(result.data.message).toBe('用户名或密码不正确');
    expect(wrapper.vm.message).toBe('用户名或密码不正确');
  });

  it('用户或密码输入错误', async () => {
    expect.assertions(3);
    wrapper.setData({
      formLabelAlign: {
        user: 'error',
        password: '123456',
      },
    });

    AxiosMockAdapter.onPost('http://localhost:3001/api/login', wrapper.vm.formLabelAlign).reply(
      200,
      {
        status: 500,
        data: null,
        message: '用户名或密码不正确',
      },
    );

    const result = await wrapper.vm.onSubmit();
    expect(result.data.status).toBe(500);
    expect(result.data.message).toBe('用户名或密码不正确');
    expect(wrapper.vm.message).toBe('用户名或密码不正确');
  });

  it('Succeeded', async () => {
    expect.assertions(3);
    wrapper.setData({
      formLabelAlign: {
        user: 'admin',
        password: '123456',
      },
    });

    AxiosMockAdapter.onPost('http://localhost:3001/api/login', wrapper.vm.formLabelAlign).reply(
      200,
      {
        status: 200,
        data: null,
        message: '登录成功',
      },
    );

    const result = await wrapper.vm.onSubmit();

    expect(result.data.status).toBe(200);
    expect(result.data.message).toBe('登录成功');
    expect(wrapper.vm.message).toBe('登录成功');
  });
});
