import Vue from 'vue';
import Vuex from 'vuex';
import pingPong from '@/store/ping-pong/pingPong';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pingPong,
  },
});
