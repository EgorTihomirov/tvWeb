<template>
  <div>
   <div class="TV">
     <h1>Телевизор</h1>
     <div class="square"></div>
     <div class="sliderVolume"></div>
     <div class="sliderLight"></div>
   </div>
  </div>
  <div class="parentRC">
    <div class="RC">
     <h2 class="text">Пульт</h2>
     <div class="rectangle"></div>
     <button class="buttonOnOff"></button>
     <div class="Vol">
      <p class="firstTextRC">громкость</p>
      <button class="buttonMaxVol">+</button>
      <button class="buttonMinVol">-</button>
     </div>
     <div class="Light">
      <p class="secondTextRC">яркость</p>
      <button class="buttonMaxLight">+</button>
      <button class="buttonMinLight">-</button>
     </div>
     <div class="Chan">
      <p>переключить канал</p>
      <button class="buttonNextChan">+</button>
      <button class="buttonPrewChan">-</button>
     </div>
   </div>
  </div>
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

.parentTV {
  text-align: center;
}

.TV {
  display: inline-block;
}

.parentRC {
  text-align: right;
}

.RC {
  display: inline-block;
  text-align: center;
  color: aliceblue;
}

.text {
  position: relative;
  bottom: 260px;
  color: #2c3e50;
}

.square {
  position: relative;
  top: 60px;
	width: 300px;
	height: 300px;
	background: rgb(46, 46, 46);
}
.rectangle {
  position: relative;
  bottom: 250px;
	width: 150px;
	height: 360px;
	background: rgb(32, 27, 27);
}

.sliderVolume {
  position: relative;
  top: 80px;
  width: 300px;
  height: 50px;
  background: rgb(156, 156, 156);
}

.sliderLight {
  position: relative;
  top: 90px;
  width: 300px;
  height: 50px;
  background: rgb(156, 156, 156);
}

.Vol {
  position: relative;
  bottom: 470px;
}

.Light {
  position: relative;
  bottom: 630px;
}

.Chan {
  position: relative;
  bottom: 530px;
}

.buttonOnOff {
  position: relative;
  bottom: 580px;
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;
  border: none;
}

.buttonPrewChan {
  margin-left: 5px;
  border: none;
  border-radius: 50%;
}

.buttonNextChan {
  border-radius: 50%;
  margin-right: 5px;
  border: none;
}

.buttonMinVol {
  border-radius: 50%;
  border: none;
  margin-left: 5px;
}

.buttonMaxVol {
  border-radius: 50%;
  border: none;
  margin-right: 5px;
}

.buttonMaxLight {
  border-radius: 50%;
  border: none;
  margin-right: 5px;
}

.buttonMinLight {
  border-radius: 50%;
  border: none;
  margin-left: 5px;
}

</style>
