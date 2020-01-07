<template>
  <div class="card-front">
    <span class="number">{{ pokemon.number }}</span>
    <div class="image-wrapper">
      <img class="image" :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.number}.png`" :alt="pokemon.name" loading="lazy">
    </div>
    <div class="info-wrapper">
      <h1 class="name">{{ pokemon.name }}</h1>
      <ul class="types">
        <li class="type-tag" v-for="type in pokemon.types" :key="type" :style="{ backgroundColor: typeColor(type) }">{{ type }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import utils from '@/mixins/utils';

export default Vue.extend({
  props: {
    pokemon: { type: Object, required: true },
  },
  mixins: [
    utils,
  ],
});
</script>

<style scoped lang="scss">
.card-front {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: 1fr auto 16px;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(227,227,227,1) 75%);
  transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) all .22s;
  position: relative;
  height: 100%;
  width: 100%;
  .number {
    position: absolute;
    top: 12px;
    left: 12px;
    font-size: 15px;
    font-weight: 700;
    color: #727272;
    user-select: none;
  }
  .image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .image {
      width: 83%;
      height: auto;
      transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) all .22s;
      user-select: none;
    }
  }
  .info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .name {
      font-size: 19px;
      font-weight: 800;
      margin: 0;
      user-select: none;
    }
    .types {
      display: flex;
      align-items: center;
      padding: 0;
      margin: 11px 0 0 0;
      .type-tag {
        border-radius: 50px;
        padding: 4px 9px;
        margin: 0 4px;
        color: #fff;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        word-spacing: 1px;
        list-style-type: none;
        user-select: none;
      }
    }
  }
}
.card-front:hover {
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(247,247,247,1) 100%);
}
.card-front:hover .image {
  transform: scale(1.25) rotate(4deg);
}
</style>
