import { shallowMount, createLocalVue  } from '@vue/test-utils';
import VueRouter from 'vue-router';
import PokemonCard from '@/components/PokemonCard.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('PokemonCard.vue', () => {
  const wrapper = shallowMount(PokemonCard, {
    localVue,
    router,
    propsData: {
      pokemon: {
        id: 'UG9rZW1vbjowMDE=',
        number: '001',
        name: 'Bulbasaur',
        types: [
          'Grass', 'Poison',
        ],
      },
    },
  });
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  });
  test('route query changes correctly on card click', () => {
    const pokemonCard = wrapper.find('.pokemon-card');
    pokemonCard.trigger('click');
    expect(wrapper.vm.$route.query.q).toBe('Bulbasaur');
  });
});
