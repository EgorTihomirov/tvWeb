
export class TV {
    constructor () {
        this.volume = 50
        this.isEnabled = false
        this.brightness = 50
        this.arrayChan = [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/1200px-Felis_silvestris_silvestris.jpg",
            "https://bigpicture.ru/wp-content/uploads/2019/10/winterCats00.jpg"
        ]
        this.currentChan = 0
    }

    PlusVolume() {
        if (this.volume+1 > 100) {
            return "недопустимое значение"
        }
        this.volume++
    }

    MinVolume() {
        if (this.volume-1 < 0) {
            return "недопустимое значение"
        }
        this.volume--
    }
    
    getVolume() {
        return this.volume
    } 
   
    PlusBrightness() {
        if (this.brightness+1 > 100) {
            return "недопустимое значение"
        }
        this.brightness++
    }

    MinBrightness() {
        if (this.brightness-1 > 100) {
            return "недопустимое значение"
        }
        this.brightness--
    }

    getBrightness() {
        return this.brightness
    }

    OnOff() {
        this.included = !this.included
    }

    getStateTv() {
        return this.included
    }

    NextChannel() {
        if (this.currentChan++ > this.arrayChan.length-1) {
            return this.currentChan = 0
        }
    }

    PrevChannel() {
        if (this.currentChan-- < 0 ) {
            return this.currentChan = this.arrayChan.length-1
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

    managementIncluded() {
        this.tv.OnOff()
    }

    managementPlusBrightness() {
        this.tv.PlusBrightness()
    }

    managementMinBrightness() {
        this.tv.MinBrightness()
    }

    managementPlusVolume() {
        this.tv.PlusVolume()
    }

    managementMinVolume() {
        this.tv.MinVolume()
    }

    managementNextChannel() {
        this.tv.NextChannel()
    }

    managementPrevChannel() {
        this.tv.PrevChannel()
    }
}
