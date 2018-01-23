import App from '@/App';
import { shallow } from 'vue-test-utils';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(App, {
      stubs: ['router-link', 'router-view'],
    });
  });

  it('验证img的src属性', () => {
    expect(wrapper.find('img').attributes().src).toBe('./assets/logo.png');
  });
});
