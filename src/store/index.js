import Vue from 'vue';
import Vuex from 'vuex';
import pingPong from '@/store/ping-pong/pingPong';
import dashboard from '@/store/ping-pong/dashboard';
import popup from '@/store/popup/popup';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pingPong,
    dashboard,
    popup,
  },
});
