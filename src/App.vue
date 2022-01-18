<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/layout/Header'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>
<style lang="scss">

body {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  margin: 0;
  bottom: 0;
}
p,h1,h2,h3,h4,ul,li {
  margin: 0;
  padding: 0;
}
button {
  background-color: unset;
  border: none;
}
#app {
  font-family: 'Roboto', sans-serif,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@import'~bootstrap/dist/css/bootstrap.css';
</style>
