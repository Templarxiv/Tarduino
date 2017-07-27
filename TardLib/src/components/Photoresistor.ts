import { FiveComponent } from "./FiveComponent";

export class Photoresistor extends FiveComponent {
    private photoresistor;
    private brightness = 0;
    /**Analog pin, Need resistor! http://johnny-five.io/img/breadboard/photoresistor.png*/
    constructor(board, aPin: number, threshold: 250) {
        super();
        this.photoresistor = new this.five.Sensor({
            pin: "A" + aPin,
            threshold: threshold
        });
        board.repl.inject({
            pot: this.photoresistor
        });
        this.photoresistor.on("data", function () {
            this.brightness = this.value;
        });
        console.log("Photoresistor pin " + aPin + " - ready")
    }
    getBrightness() {
        return this.brightness;
    }
}