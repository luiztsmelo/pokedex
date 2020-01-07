import { shallowMount } from '@vue/test-utils';
import CardBack from '@/components/CardBack.vue';

describe('CardBack.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(CardBack, {
      mocks: {
        $apolloData: {
          queries: {
            pokemon: {
              loading: false,
            }
          },
        },
        pokemon: {
          maxHP: 1071,
          maxCP: 951,
          attacks: {
            fast: [
              {
                name: "Tackle",
                type: "Normal",
                damage: 12
              },
              {
                name: "Vine Whip",
                type: "Grass",
                damage: 7
              }
            ],
            special: [
              {
                name: "Power Whip",
                type: "Grass",
                damage: 70
              },
              {
                name: "Seed Bomb",
                type: "Grass",
                damage: 40
              },
              {
                name: "Sludge Bomb",
                type: "Poison",
                damage: 55
              }
            ]
          }
        }
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
});
