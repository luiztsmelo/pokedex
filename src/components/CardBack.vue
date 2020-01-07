<template>
  <div class="card-back">
    <Loader class="loader-pokemon" v-if="$apolloData.queries.pokemon.loading" />
    <div class="main-stats-container" v-if="!$apolloData.queries.pokemon.loading">
      <div class="box">
        <span class="label">Max HP</span>
        <h1 class="number">{{ pokemon.maxHP }}</h1>
      </div>
      <div class="box">
        <span class="label">Max CP</span>
        <h1 class="number">{{ pokemon.maxCP }}</h1>
      </div>
    </div>
    <div class="attacks-container" v-if="!$apolloData.queries.pokemon.loading">
      <div class="attacks-wrapper" v-for="(attacks, index) in pokemonAttacks" :key="index">
        <h1 class="attacks-title">{{ index === 0 ? 'Fast Attacks' : 'Special Attacks' }}</h1>
        <div class="attacks-grid">
          <div class="header-row">
            <span class="name-label">Attack</span>
            <span class="type-label">Type</span>
            <span class="power-label">Power</span>
          </div>
          <div class="attack-row" v-for="attack in attacks" :key="attack.name">
            <span class="attack-name">{{ attack.name }}</span>
            <span class="attack-type" :style="{ backgroundColor: typeColor(attack.type) }">{{ attack.type }}</span>
            <span class="attack-power">{{ attack.damage }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { gql } from 'apollo-boost';
import Loader from '@/components/Loader.vue';
import utils from '@/mixins/utils';

export default Vue.extend({
  components: {
    Loader,
  },
  mixins: [
    utils,
  ],
  apollo: {
    pokemon: {
      query: gql`
        query pokemon($name: String!) {
          pokemon(name: $name) {
            maxHP
            maxCP
            attacks {
              fast {
                name
                type
                damage
              }
              special {
                name
                type
                damage
              }
            }
          }
        }
      `,
      variables() {
        return {
          name: this.$route.query.q,
        };
      },
    },
  },
  computed: {
    pokemonAttacks(): array {
      const pokemonAttacks = Object.values(this.pokemon.attacks);
      const pokemonAttacksWithoutType = pokemonAttacks.pop();
      return pokemonAttacks;
    },
  },
});
</script>

<style scoped lang="scss">
.card-back {
  position: relative;
  height: 100%;
  transform: rotateY(180deg);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(247,247,247,1) 100%);
  padding: 16px;
  user-select: none;
  .loader-pokemon {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%,-50%);
  }
  .main-stats-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    padding-bottom: 2px;
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      background: radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(237,237,237,1) 95%);
      padding: 4px;
      .label {
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 600;
      }
      .number {
        font-size: 17px;
        font-weight: 700;
        margin: 0;
      }
    }
  }
  .attacks-container {
    .attacks-wrapper {
      .attacks-title {
        font-size: 17px;
        margin: 16px 0 5px;
      }
      .attacks-grid {
        display: grid;
        grid-gap: 6px;
        .header-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-gap: 10px;
          span {
            font-size: 15px;
            font-weight: 600;
          }
          .type-label {
            text-align: center;
          }
          .power-label {
            text-align: center;
          }
        }
        .attack-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-gap: 10px;
          .attack-name {
            font-size: 15px;
          }
          .attack-type {
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1px;
            background-color: #000;
            border-radius: 12px;
            color: #fff;
          }
          .attack-power {
            font-size: 15px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
