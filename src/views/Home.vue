<template>
  <div class="home">
    <h1 class="title">Pokédex</h1>
    <div class="pokemons-grid">
      <Loader class="loader-pokemons" v-if="$apolloData.queries.pokemons.loading" />
      <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" v-else />
    </div>
  </div>
</template>

<script>
import { gql } from 'apollo-boost';
import Loader from '@/components/Loader.vue';
import PokemonCard from '@/components/PokemonCard.vue';

export default {
  components: {
    Loader,
    PokemonCard,
  },
  apollo: {
    pokemons: gql`
      query {
        pokemons(first: 200) {
          id
          number
          name
          types
        }
      }
    `,
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4% 15%;
  .title {
    font-size: 46px;
    font-weight: 800;
    margin: 0 0 75px 0;
    text-align: center;
  }
  .pokemons-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 360px;
    grid-gap: 32px;
    position: relative;
    width: 100%;
    .loader-pokemons {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
}

@media screen and (max-width: 767px) {
  .home {
    padding: 4% 7%;
    .pokemons-grid {
      grid-template-columns: 1fr;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .home {
    padding: 4% 7%;
    .pokemons-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
