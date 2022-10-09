<template>
  <div>
   <div class="TV">
     <h1>Телевизор</h1>
      <div v-if="tv.getStateTv() != true">
          <div class="square"></div>
      </div>
      <div v-else-if="tv.getStateTv() == true">
        <img :src=currentChannel() class="TVSize">
      </div>
      <div>
        <svg width="300" height="50" class="sliderVolume">
          <rect :width="tv.getVolume()" height="50" style="fill:rgb(0,0,255);" />
        </svg>
      </div>
      <diV>
        <svg width="300" height="50" class="sliderLight">
          <rect :width="tv.getBrightness()" height="50" style="fill:rgb(0,0,255);" />
        </svg>
      </diV>
   </div>
  </div>
  <div class="parentRC">
    <div class="RC">
     <h2 class="text">Пульт</h2>
     <div class="rectangle"></div>
     <button class="buttonOnOff" @click="OnOff()"></button>
     <div class="Vol">
      <p class="firstTextRC">громкость</p>
      <button class="buttonMaxVol" @click="VolPlus()">+</button>
      <button class="buttonMinVol" @click="VolMin()">-</button>
     </div>
     <div class="Light">
      <p class="secondTextRC">яркость</p>
      <button class="buttonMaxLight" @click="LightPlus()">+</button>
      <button class="buttonMinLight" @click="LightMin()">-</button>
     </div>
     <div class="Chan">
      <p>переключить канал</p>
      <button class="buttonNextChan" @click="NextChan()">+</button>
      <button class="buttonPrevChan" @click="PrevChan()">-</button>
     </div>
   </div>
  </div>
</template>

<script>
import * as contTv from '@/components/tvLogic.js'
let tv = new contTv.TV()
let cont = new contTv.RemoteController(tv)
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      tv: tv,
      cont: cont
    }
  },
  methods: {
    VolPlus() {
      this.cont.managementPlusVolume()
    },

    VolMin() {
      this.cont.managementMinVolume()
    },

    LightMin() {
      this.cont.managementMinBrightness()
    },

    NextChan() {
      this.cont.managementNextChannel()
    },
    
    PrevChan() {
      this.cont.managementPrevChannel()
    },
    
    LightPlus() {
      this.cont.managementPlusBrightness()
    },
    
    OnOff() {
      this.cont.managementIncluded()
    },
    currentChannel() {
     let channels = this.tv.getArrayChannel()
     let channel = channels[this.tv.currentChan]
     return channel
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

.TVSize {
  width: 300px;
  height: 300px;
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
  border-radius: 20px;
}

.sliderVolume {
  position: relative;
  top: 80px;
  background: rgb(156, 156, 156);
}

.sliderLight {
  position: relative;
  top: 90px;
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

.buttonPrevChan {
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
