///<reference path="../../types/johnny-five.d.ts"/>
import * as five from "johnny-five";
import { Globals } from "../globals";
export class FiveComponent {
    protected five = five;
    protected board: any;
    constructor() {
        this.board = Globals.board;
    }
    sleep(ms: number): Promise<any> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
