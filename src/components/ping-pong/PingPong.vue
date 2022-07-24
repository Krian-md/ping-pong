<template>
  <div id="board">
    <canvas id="ping-pong"> Your browser doesn`t support canvas! </canvas>
  </div>
</template>

<script>
import PingPong from '@/classes/PingPong';
import { mapMutations, mapActions } from 'vuex';
import notifyStates from '@/enums/notifyStates';

export default {
  name: 'PingPong',
  mounted() {
    const game = new PingPong('#ping-pong', '#board', this.notify);
    this.setGame(game);
    game.run();
  },
  methods: {
    ...mapMutations(['increasePoint', 'setGame']),
    ...mapActions(['victory']),
    notify({ name, data }) {
      switch (name) {
        case notifyStates.INCREASE_POINT:
          this.increasePoint(data);
          break;
        case notifyStates.VICTORY:
          this.victory(data);
          break;
      }
    },
  },
};
</script>

<style scoped>
#board {
  border: 2px solid #b71c1c;
  height: 100%;
}

canvas {
  background: #eee;
}
</style>
