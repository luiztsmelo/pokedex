import { shallowMount } from '@vue/test-utils';
import PokemonCard from '@/components/PokemonCard.vue';

describe('PokemonCard.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(PokemonCard, {
      mocks: {
        $route: {
          query: {
            q: 'Bulbasaur',
          }
        }
      },
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
