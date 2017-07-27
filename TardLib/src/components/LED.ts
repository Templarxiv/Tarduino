import { FiveComponent } from "./FiveComponent";

export class LED extends FiveComponent {
    private led: any;
    constructor(pin: number) {
        super();
        this.led = new this.five.Led(pin);
        console.log("LED-" + pin + "- ready");
    }
    blink(interval?: number) {
        if (interval) this.led.blink(interval)
        else this.led.blink();
    }
    fadeIn() {
        this.led.fadeIn();
    }
    fadeOut() {
        this.led.fadeOut();
    }
    on() {
        this.led.on();
    }
    off() {
        this.led.off();
    }
    toggle() {
        this.led.toggle();
    }
}