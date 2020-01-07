import { shallowMount } from '@vue/test-utils';
import CardFront from '@/components/CardFront.vue';

describe('CardFront.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(CardFront, {
      propsData: {
        pokemon: {
          id: 'UG9rZW1vbjowMDE=',
          number: '001',
          name: 'Bulbasaur',
          types: [
            'Grass', 'Poison'
          ]
        }
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
});
