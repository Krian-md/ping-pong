<template>
  <v-app> 
    <v-container fill-height fluid> 
      <v-row class="height-content">
        <v-col md="7" sm="12">
          <PingPong></PingPong>
        </v-col>
        <v-col md="5" sm="12">
          <Dashboard></Dashboard>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import PingPong from '@/components/ping-pong/PingPong'
import Dashboard from '@/components/ping-pong/Dashboard'

export default {
  name: 'App',

  components: {
    PingPong,
    Dashboard
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background: lightgray;
}
.height-content {
  height: 80%;
}
</style>
