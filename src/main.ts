import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh/graphql',
  }),
});

Vue.use(VueApollo);

new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
