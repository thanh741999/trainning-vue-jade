<template>
  <div class="loading" v-if="loading">
    <svg viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,0.8);
  z-index: 10;
}
svg {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 3.75em;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

circle {
  fill: none;
  stroke: #fc2f70;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>
