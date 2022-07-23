<template>
  <div id="dashboard">
    <div class="dicription-configuration">
      <h3>Game Ping-Pong</h3>
      <p>
        Pong is one of the first computer games that ever created, this simple
        "tennis like" game features two paddles and a ball, the goal is to
        defeat your opponent by being the first one to gain 10 point, a player
        gets a point once the opponent misses a ball.
      </p>

      <h4>Options:</h4>
      <div>
        <!--<p>{{ selected }}</p> -->
        <v-checkbox
          v-model="selected"
          v-for="option in options"
          :key="option.name"
          :label="option.name"
          :value="option.value"
          dark
          dense
        ></v-checkbox>
      </div>
    </div>
    <div>
      <p class="start">Press space to start!</p>
      <div class="result">
        <span>{{ getFirstPlayer.name }} ( {{ getFirstPlayer.point }} )</span>
        <span>{{ getSecondPlayer.name }} ( {{ getSecondPlayer.point }} )</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      options: [
        {
          name: 'Add accselleration elements',
          value: 'acceleration',
        },
        {
          name: 'Add bonuses',
          value: 'bonuses',
        },
      ],
      selected: [],
    };
  },

  computed: {
    getFirstPlayer() {
      return this.$store.getters.getFirstPlayer;
    },
    getSecondPlayer() {
      return this.$store.getters.getSecondPlayer;
    },
  },
};
</script>

<style scoped>
#dashboard {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  color: snow;
  background: #5d4037;
  text-align: justify;
  border: 2px solid #b71c1c;
  height: 100%;
}

.dicription-configuration {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.start {
  text-align: center;
}

.result {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: large;
  height: 75px;
  background: #b71c1c;
}
</style>
