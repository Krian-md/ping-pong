<template>
  <div id="board">
    <canvas id="ping-pong">
      Your browser doesn`t support canvas!
    </canvas>
  </div>
</template>


<script>
import PingPong from '@/classes/PingPong'

export default {
  name: 'PingPong',
  mounted() {
    const game = new PingPong('#ping-pong', '#board', this.notify);
    game.run();


  },
  methods: {
    notify() {
      
    }
  }
}
</script>

<style scoped>
  #board {
    border: 2px solid brown;
    height: 100%;
  }

  canvas {
    background: #eee;
  }
</style>