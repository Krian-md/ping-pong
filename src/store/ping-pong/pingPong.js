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
    setGame(state, game) {
      state.game = game;
    },
    setFactory(state, factoryName) {
      state.game.setFactory(factoryName);
    },
  },
  state: {
    winner: 'Unkown',
    game: null,
  },
  getters: {
    getWinner: (state) => {
      return state.winner;
    },
    getGame: (state) => {
      return state.game;
    },
  },
};
