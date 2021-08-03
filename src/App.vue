<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{ counter }}</h1>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <button @click="incrementBy(5)">+5</button>

  <h1>{{ counter2 }}</h1>
</template>

<script>
import useCounter from './composables/useCounter'

export default {
  name: 'App',
  setup() {

    const { counter, increment, incrementBy, decrement } = useCounter(15)
    const { counter:counter2 } = useCounter(20)

    return {
      counter,
      counter2,

      increment,
      incrementBy,
      decrement
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
