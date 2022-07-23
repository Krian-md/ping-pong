export default {
  mutations: {
    openPopup(state) {
      state.dialog = true;
    },
    closeDialog(state) {
      state.dialog = false;
    },
  },
  state: {
    dialog: false,
  },
  getters: {
    isOpenDialog: (state) => {
      return state.dialog;
    },
  },
};
