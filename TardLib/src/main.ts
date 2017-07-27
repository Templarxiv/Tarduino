///<reference path="../types/johnny-five.d.ts"/>
import * as five from "johnny-five";
export { LCD } from "./components/LCD";
export { LED } from "./components/LED";
export { ProximitySensor } from "./components/ProximitySensor";
export { Speaker } from "./components/Speaker";
export { Photoresistor } from "./components/Photoresistor";
export { IMU, Thermistr } from "./components/Thermometers";
export { Motor } from "./components/Motors";
export { Servo } from "./components/servo";
import { Servo } from "./components/servo";
import { Globals } from "./globals";
export class Board {
    private board: five.Board;
    static repl;
    private app: IAPP;
    constructor(app: IAPP, port: string) {
        Board.repl = this;
        this.app = app;
        this.board = new five.Board({
            port: port
        });
        Globals.board = this.board;
        this.board.on("ready", function () {
            // var led = new five.Led(13);
            // led.blink(500);
            Board.repl.app.setup.call(Board.repl.app);
            // var servo = new Servo(4);
            // servo.to(120);
        });
        // this.board.on("ready", this.app.setup.call(this.app));
        console.log("Board - ready");
    }
    loop(period, funct: Function) {
        this.board.loop(period, funct(this));
    }
}

export interface IAPP {
    setup();
}