import { FiveComponent } from "./FiveComponent";
export class Motor extends FiveComponent {
    private motor;
    /**5v-Motor, Motor-Transistor(220om) - dPins =pwm:9, dir:8, brake: */
    constructor(board, dPins: number[]) {
        super();
        this.motor = new this.five.Motor(dPins);
        board.repl.inject({
            motor: this.motor
        });
        console.log("Motor pins " + dPins + " - ready");
    }
    start(number?: 255) {
        this.motor.start(number);
        console.log("Motor start " + number);
    }
    stop() {
        this.motor.stop();
        console.log("Motor stop");
    }
}