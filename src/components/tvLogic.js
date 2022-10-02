
let log = console.log

class TV {
    constructor (volume, included, brightness, arrayChan) {
        this.volume = volume
        this.included = included
        this.brightness = brightness
        this.arrayChan = arrayChan
        this.currentChan = arrayChan[0]
    }

    setVolume(volume) {
        if (volume > 100 || volume < 0) {
            return "недопустимое значение"
        }
        this.volume = volume
    }
    
    getVolume() {
        return this.volume
    } 
   
    setBrightness(brightness) {
        if (brightness > 100 || brightness < 0) {
            return "недопустимое значение"
        }
        this.brightness = brightness
    }

    getBrightness() {
        return this.brightness
    }

    onOff(included) {
        this.included =included
    }

    getStateTv() {
        return this.included
    }

    switchChannel(numChan) {
        if (numChan >= this.arrayChan.lenght) {
            return "нет такого канала"
        }
        this.currentChan = this.arrayChan[numChan]
    }
    getChannel() {
        return this.currentChan
    }

    getArrayChannel() {
        return this.arrayChan
    }
}

class RemoteController {
    constructor(tv) {
        this.tv = tv
    }

    managementIncluded(newIncluded) {
        this.onOff(newIncluded)
    }

    managementBrightness(newBrightness) {
        this.tv.setBrightness(newBrightness)
    }

    managementVolume(newVol) {
        this.tv.setVolume(newVol)
    }

    managementChannel(nextChannel) {
        this.switchChannel(nextChannel)
    }
}

let tv = new TV(10, true, 50, ["1", "2", "3"])
let rc = new RemoteController(tv)
rc.managementVolume(100)
log(tv._arrayChan)
