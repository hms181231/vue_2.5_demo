import Tables from '@/components/table';
import { shallow } from 'vue-test-utils';

describe('Table', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Tables);
  });

  it('props', () => {
    const data = wrapper.vm.$options.props.data;
    expect(data.type).toBe(Array);
    expect(wrapper.vm.data).toEqual([]);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('li标签的for循环', () => {
    wrapper.setProps({ data: [1, 2] });
    expect(wrapper.vm.data).toEqual([1, 2]);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('computed test', () => {
    const callback = jest.fn();
    wrapper.vm.$on(wrapper.vm.$options.model.event, callback);
    wrapper.vm.meizhi = 'test';
    expect(callback).toBeCalledWith('test');
    expect(wrapper.vm.test).toBe('test');
  });
});
