<template>
  <h1>Телевизор</h1>
  <div class="square"></div>
  <div class="rectangle"></div>
  <div class="sliderVolume"></div>
  <div class="sliderLight"></div>
</template>

<script>
import * as contTv from '@/components/tvLogic.js'
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      tv: new contTv.TV(),
      cont: new contTv.RemoteController()
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

.square {
  position: relative;
  left: 730px;
  top: 60px;
	width: 300px;
	height: 300px;
	background: rgb(46, 46, 46);
}
.rectangle {
  position: relative;
  left: 1400px;
	width: 150px;
	height: 360px;
	background: rgb(32, 27, 27);
}

.sliderVolume {
  position: relative;
  bottom: 285px;
  left: 730px;
  width: 300px;
  height: 50px;
  background: rgb(156, 156, 156);
}

.sliderLight {
  position: relative;
  left: 730px;
  bottom: 275px;
  width: 300px;
  height: 50px;
  background: rgb(156, 156, 156);
}

</style>
