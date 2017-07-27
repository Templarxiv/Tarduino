import { FiveComponent } from "./FiveComponent";
export class Servo extends FiveComponent {
    private servo;
    constructor(dPin: number) {
        super();
        this.servo = new this.five.Servo(dPin);
        this.center();
        console.log("Servo pin " + dPin + " - ready");
    }
    center() {
        this.servo.center();
    }
    to(angle: number, time?: number, step?: number) {
        if (time && step)
            this.servo.to(angle, time, step);
        else if (time)
            this.servo.to(angle, time);
        else this.servo.to(angle);
    }
    stop() {
        this.servo.stop();
    }
    sweep(){
        this.servo.sweep();
    }
}