import { FiveComponent } from "./FiveComponent";

export class LCD extends FiveComponent {
    private lcd: any;
    private ROWS: 2;
    private COLS: 16;
    private lastString: string;
    /**SCL - A4 , SDA - A5 */
    constructor() {
        super();
        this.lcd = new this.five.LCD({
            controller: "PCF8574AT"
        });
        this.on();
        this.clear();
    }
    async print(text: string, animationTime?) {
        console.log("LCD printing " + text);
        if (this.lastString != text)
            this.clear();
        this.lastString = text;
        if (!animationTime)
            if (text.length > 16) {
                this.lcd.cursor(0, 0).print(text.substring(0, 16));
                this.lcd.cursor(1, 0).print(text.substring(16, text.length));
            }
            else
                this.lcd.cursor(0, 0).print(text);
        else {
            var curRow = 0;
            for (var i = 0; i < text.length; i++) {
                if (i > 16) {
                    this.lcd.cursor(1, i - 17).print(text[i]);
                }
                else
                    this.lcd.cursor(0, i).print(text[i]);
                await this.sleep(animationTime);
            }
        }
    }
    clear() {
        this.lcd.clear();
    }
    on() {
        this.lcd.on();
        console.log("LCD - ready");
    }
    off() {
        this.lcd.off();
        console.log("LCD - OFF");
    }
}