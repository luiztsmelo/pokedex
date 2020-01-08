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
    expect(wrapper.vm.$route.query.q).toBe(undefined);
    expect(pokemonCardDiv.attributes().style).toBe(undefined);
  });
  const pokemonCardDiv = wrapper.find('.pokemon-card');
  test('click on unflipped pokemon card works fine', () => {
    pokemonCardDiv.trigger('click');
    expect(wrapper.vm.$route.query.q).toBe('Bulbasaur');
    expect(pokemonCardDiv.attributes().style).toBe('transform: rotateY(180deg);');
  });
  test('click on flipped pokemon card works fine', () => {
    pokemonCardDiv.trigger('click');
    expect(wrapper.vm.$route.query.q).toBe(undefined);
    expect(pokemonCardDiv.attributes().style).toBe(undefined);
  });
});
