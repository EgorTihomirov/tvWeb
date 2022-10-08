let log = console.log

export class TVChannel {
    constructor (img) {
        this.img = img
    }
}
export class TV {
    constructor () {
        this.volume = 50
        this.isEnabled = false
        this.brightness = 50
        this.arrayChan = [
            new TVChannel("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/1200px-Felis_silvestris_silvestris.jpg"),
            new TVChannel("https://bigpicture.ru/wp-content/uploads/2019/10/winterCats00.jpg")
        ]
        this.currentChan = 0
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

    nextChannel() {
        if (this.currentChan++ > this.arrayChan.lastIndex) {
            this.currentChan = 0
        }
    }

    prevChannel() {
        if (this.currentChan-- < 0 ) {
            this.currentChan = this.arrayChan.lastIndex
        }
    }

    getChannel() {
        return this.currentChan
    }

    getArrayChannel() {
        return this.arrayChan
    }
}

export class RemoteController {
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

