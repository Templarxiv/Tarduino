import { ProximitySensor, Servo } from "../../TardLib/src/main";
var tryDetectCount = 0;
export class Seeker {
    distance: number;
    ps: ProximitySensor;
    servo: Servo;
    detect = false;
    text: string;
    constructor(proximityPin: number, servoPin: number) {
        // this.ps = new ProximitySensor(proximityPin);
        this.servo = new Servo(servoPin);
        // this.servo.to(50);
        // this.servo.to(140);
        this.servo.sweep();


        // setInterval(this.seekHuman.bind(this), 1000);
    }
    seekHuman() {
        // this.distance = getRandomInt(0, 1000);
        this.distance = this.ps.getDistance();
        this.text = "Distance " + this.distance;
        if (this.distance < 200) this.humanSpoted();
        else if (this.distance > 200 && tryDetectCount == 0) this.humanLost();
    }
    humanSpoted() {
        console.log("Human detected");
        this.detect = true;
        tryDetectCount = 0;
    }
    humanLost() {
        if (tryDetectCount > 0) return;
        this.detect = false;
        var searchinLost;
        var search = () => {
            console.log("Searching... try №" + tryDetectCount);
            tryDetectCount++;
            // this.servo.to(0, 1400);
            // this.servo.to(180, 1400);
            this.servo.sweep();
            if (this.detect) clearInterval(searchinLost);
            if (tryDetectCount == 3) {
                clearInterval(searchinLost);
                this.stopSeek();
            };
        }
        search();
        searchinLost = setInterval(search.bind(this), 3000);
    }
    stopSeek() {
        console.log("Stop Searching");
        this.servo.center();
        this.servo.stop();
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
