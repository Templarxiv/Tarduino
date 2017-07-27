import { Board, Speaker, LCD, Thermistr, IAPP } from "../../TardLib/src/main";
import { Seeker } from "./seeker";

var testSong = [
    ["C4", 1 / 4],
    ["D4", 1 / 4],
    ["F4", 1 / 4],
    ["D4", 1 / 4],
    ["A4", 1 / 4],
    [null, 1 / 4],
    ["A4", 1],
    ["G4", 1],
    [null, 1 / 2],
    ["C4", 1 / 4],
    ["D4", 1 / 4],
    ["F4", 1 / 4],
    ["D4", 1 / 4],
    ["G4", 1 / 4],
    [null, 1 / 4],
    ["G4", 1],
    ["F4", 1],
    [null, 1 / 2]
]

export class TardServer implements IAPP {
    lcd: LCD;
    speaker: Speaker;
    thermistr: Thermistr;
    board: Board;
    static repl: TardServer;
    constructor() {
        this.board = new Board(this, "COM3");
        TardServer.repl = this;
    }
    setup() {
        console.log("Starting setup");
        this.lcd = new LCD();
        this.speaker = new Speaker(8);
        // this.thermistr = new Thermistr(3);
        this.lcdPrint("Hello World from George!");
        this.speaker.playSong(testSong, 100);
        var seeker = new Seeker(5, 4);
        // setInterval(this.lcdPrint.bind(this, seeker.text), 300);
        console.log("Setup complete");
        // this.board.loop(2000, () => { this.lcd.print("Temp " + this.thermistr.getCelsius() + "C", 1) });
    }
    lcdPrint(text: string) {
        if (text != undefined)
            this.lcd.print(text);
    }
}

// new Test();