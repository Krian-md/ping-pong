export default {
  actions: {
    victory({ commit }, player) {
      commit('victory', player);
      commit('openPopup');
    },
  },
  mutations: {
    victory(state, player) {
      state.winner = player.name;
    },
  },
  state: {
    winner: 'Unkown',
  },
  getters: {
    getWinner: (state) => {
      return state.winner;
    },
  },
};
