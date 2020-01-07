<template>
  <div ref="pokemonCard" class="pokemon-card" @click="pokemonCardHandleClick">
    <CardFront :pokemon="pokemon" v-if="routeQuery !== pokemon.name"/>
    <CardBack v-else/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CardFront from '@/components/CardFront.vue';
import CardBack from '@/components/CardBack.vue';

export default Vue.extend({
  props: {
    pokemon: { type: Object, required: true },
  },
  components: {
    CardFront,
    CardBack,
  },
  mounted(): void {
    // if this pokemon is in the query at component mount time, flip it
    if (this.routeQuery === this.pokemon.name) this.flipCard();
  },
  methods: {
    flipCard(): void {
      this.$refs.pokemonCard.style.transform = 'rotateY(180deg)';
    },
    unflipCard(): void {
      this.$refs.pokemonCard.style.transform = 'rotateY(0deg)';
    },
    pokemonCardHandleClick(): void {
      if (this.routeQuery === this.pokemon.name) {
        this.$router.push({ path: '/' });
        this.unflipCard();
      } else {
        this.$router.push({ path: '/', query: { q: this.pokemon.name } });
        this.flipCard();
      }
    },
  },
  computed: {
    routeQuery(): string | undefined {
      return this.$route.query.q;
    },
  },
  watch: {
    routeQuery(query) {
      if (query !== this.pokemon.name) this.unflipCard();
    },
  },
});
</script>

<style lang="scss">
.pokemon-card {
  cursor: pointer;
  overflow: hidden;
  height: 100%;
  border-radius: 20px;
  box-shadow: 3px 3px 8px 1px rgba(0,0,0,.16);
  transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) all .22s;
}
.pokemon-card:hover {
  box-shadow: 3px 3px 20px 1px rgba(0,0,0,.35);
}
</style>
