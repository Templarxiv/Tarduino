import { FiveComponent } from "./FiveComponent";

export class ProximitySensor extends FiveComponent {
    private proximity;
    private distance = 0;
    /**http://johnny-five.io/img/breadboard/proximity-hcsr04.png */
    constructor(dPin: number) {
        super();
        this.proximity = new this.five.Proximity({
            controller: "HCSR04",
            pin: dPin
        });
        this.proximity.on("data", function (caller) {
            // this.distance = this.cm;
            console.log("distance: " + this.cm);
        });
        console.log("ProximitySensor pin " + dPin + " - ready");
    }
    getDistance() {
        console.log("distance: " + this.distance);
        return this.distance;
    }
}