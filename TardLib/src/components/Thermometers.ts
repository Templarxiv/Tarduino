import { FiveComponent } from "./FiveComponent";

export class IMU extends FiveComponent {
    private imu;
    private celsius = 0;
    private acceleration = 0;
    /**  Thermometer, Accelerometer, Gyroscope
     * SCL - A4 , SDA - A5  http://johnny-five.io/img/breadboard/temperature-mpu6050.png     
    */
    constructor() {
        super();
        this.imu = new this.five.IMU({
            controller: "MPU6050"
        });
        this.imu.on("change", function () {
            this.celsius = this.celsius;
        });
        console.log("IMU ready");
    }
    getCelsius() {
        return this.celsius;
    }
}

export class Thermistr extends FiveComponent {
    aPin: number;
    board;
    static celsius = null;
    /**Analog - (10 кОм(Коричневая, Черная, Оранжевая) - Ground) - Thermistr, 5v */
    constructor(aPin: number) {
        super();
        this.aPin = aPin;
        this.board.pinMode(aPin, this.five.Pin.ANALOG);
        this.board.analogRead(this.aPin, function (voltage) {
            var temp;
            temp = Math.log(((10240000 / voltage) - 10000));
            temp = 1 / (0.001129148 + (0.000234125 * temp) + (0.0000000876741 * temp * temp * temp));
            temp = temp - 273.15;
            Thermistr.celsius = temp;
        });
        console.log("Thermistr pin " + aPin + " - ready");
    }
    getCelsius(): Number {
        console.log("Thermistr cels " + Thermistr.celsius);
        return Math.round(Thermistr.celsius);
    }

    private toCelsius(RawADC: number) {
        var temp;
        temp = Math.log(((10240000 / RawADC) - 10000));
        temp = 1 / (0.001129148 + (0.000234125 * temp) + (0.0000000876741 * temp * temp * temp));
        temp = temp - 273.15;
        return temp;
    }

}