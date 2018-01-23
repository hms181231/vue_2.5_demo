import { mount } from 'vue-test-utils';
import Tables from '@/components/table';
import HelloWorld from '@/components/HelloWorld';

describe('HelloWorld.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(HelloWorld);
  });

  it('should render correct contents', () => {
    expect(wrapper.find('.hello h1').element.textContent).toBe('Welcome to Your Vue.js App');
  });

  it('emit input', () => {
    const vm = wrapper.find(Tables).vm;
    vm.$emit(vm.$options.model.event, 'test');
    expect(wrapper.vm.doubi).toBe('test');
  });
});
