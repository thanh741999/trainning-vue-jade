<template>
  <div id="app">
    <Header :login="login"/>
    <BreadCrumb/>
    <router-view/>
    <Loading :loading="this.$store.state.loading"/>
    <Login :login="login" @closeModal="closeModal"/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import Loading from '@/components/Loading'
import Login from '@/views/Login'
import BreadCrumb from "@/layout/BreadCrumb";
export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Loading,
    Login,
    BreadCrumb
  },
  data () {
    return {
      login: false
    }
  },
  created () {
    this.$store.watch(
      () => {
         return this.$store.getters['auth/Login']
        // this.$store.getters['auth/Checkout']
      },
      (newValue) => {
        // something changed do something
        this.login = newValue
        if (this.loading) {
          document.getElementsByTagName('body')[0].style.overflow = 'hidden'
        } else {
          document.getElementsByTagName('body')[0].style.overflow = 'unset'
        }
      },
      // Optional Deep if you need it
      {
        deep: true
      }
    )
  },
  methods: {
    closeModal (e) {
      this.$store.commit('auth/setLogin', e)
    }
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
