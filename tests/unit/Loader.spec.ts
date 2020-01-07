import { shallowMount } from '@vue/test-utils';
import Loader from '@/components/Loader.vue';

describe('Loader.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(Loader)
    expect(wrapper.element).toMatchSnapshot()
  })
});
