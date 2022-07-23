<template>
  <v-dialog v-model="isOpenDialog" persistent max-width="400px">
    <v-card>
      <v-card-title>
        <span class="text-h4">You are winner {{ getWinner }}</span>
      </v-card-title>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" text @click="closeDialog"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'UserPopup',
  computed: {
    getWinner() {
      return this.$store.getters.getWinner;
    },
    isOpenDialog() {
      return this.$store.getters.isOpenDialog;
    },
  },
  methods: {
    close() {},
    closeDialog() {
      this.$store.commit('closeDialog');
      this.$store.commit('resetPoint');
    },
  },
};
</script>

<style></style>
