export default {
  mutations: {
    increasePoint(state, data) {
      if (data.name === state.firstPlayer.name) {
        state.firstPlayer.point++;
      } else if (data.name === state.secondPlayer.name) {
        state.secondPlayer.point++;
      }
    },
    resetPoint(state) {
      state.firstPlayer.point = 0;
      state.secondPlayer.point = 0;
    },
  },
  state: {
    firstPlayer: { name: 'Alex', point: 0 },
    secondPlayer: { name: 'John', point: 0 },
  },
  getters: {
    getFirstPlayer: (state) => {
      return state.firstPlayer;
    },
    getSecondPlayer: (state) => {
      return state.secondPlayer;
    },
  },
};
