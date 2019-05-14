<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="incrementClick">+</button>
      <button @click="decrementClick">-</button>
    </p>
  </div>
</template>

<script>
// Use Vuex
// import store from './store'
import {mapState,mapMutations} from 'vuex';
export default {
  computed: {
    ...mapState({
      count:state => state.counter.count
    })
  },
  methods: {
    ...mapMutations(["increment","decrement"]),
    incrementClick () {
      // this.$store.commit('increment');
      this.increment()
    },
    decrementClick () {
      // this.$store.commit('decrement')
      this.decrement();
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
