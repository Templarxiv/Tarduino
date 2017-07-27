import { FiveComponent } from "./FiveComponent";

export class Speaker extends FiveComponent {
    private piezo;
    private distance = 0;
    /** Ground-100ohm-Speaker, Digital-Speaker*/
    constructor(dPin: number) {
        super();
        this.piezo = new this.five.Piezo(dPin);
        // Injects the piezo into the repl
        this.board.repl.inject({
            piezo: this.piezo
        });
        console.log("Piezo pin " + dPin + " - ready");
    }
    /** Play a tune with an optional callback to invoke when the tune is done playing. The tune object contains a song (an array of the notes in the tune) and optional settings (e.g. tempo): */
    playSong(song: (string | number)[][], temp) {
        console.log("Plaing song: temp=" + temp + ", notes=" + song);
        this.piezo.play({
            // song is composed by an array of pairs of notes and beats
            // The first argument is the note (null means "no note")
            // The second argument is the length of time (beat) of the note (or non-note)
            song,
            tempo: temp
        });
    }
    /** Play tone at frequency (in Hz) for duration milliseconds */
    play(frequency: number, duration: number) {
        this.piezo.frequency(frequency, duration);
    }
    off() {
        this.piezo.off();
    }
    playStarWarsTheme() {
        var song = [
            ["A", 500],
            [null, 50],
            ["A", 500],
            [null, 50],
            ["A", 500],
            [null, 50],
            ["F", 350],
            [null, 50],
            ["C5", 150],
            [null, 50],
            ["A", 500],
            [null, 50],
            ["F", 350],
            [null, 50],
            ["C5", 150],
            [null, 50],
            ["A", 650],
            [null, 50],
            [null, 500],
            ["E5", 500],
            [null, 50],
            ["E5", 500],
            [null, 50],
            ["E5", 500],
            [null, 50],
            ["F5", 350],
            [null, 50],
            ["C5", 150],
            [null, 50],
            ["G4", 500],
            [null, 50],
            ["F", 350],
            [null, 50],
            ["C5", 150],
            [null, 50],
            ["A", 650],
            [null, 50],
            [null, 500],

            ["A5", 500],
            [null, 50],
            ["A", 300],
            [null, 50],
            ["A", 150],
            [null, 50],
            ["A5", 500],
            [null, 50],
            ["G#5", 325],
            [null, 50],
            ["G5", 175],
            [null, 50],
            ["F#5", 125],
            [null, 50],
            ["F5", 125],
            [null, 50],
            ["F#5", 250],
            [null, 50],
            [null, 325],
            ["A4", 250],
            [null, 50],
            ["D#5", 500],
            [null, 50],
            ["D5", 325],
            [null, 50],
            ["C#5", 175],
            [null, 50],
            ["C5", 125],
            [null, 50],
            ["B", 125],
            [null, 50],
            ["C5", 250],
            [null, 50],
            [null, 350],

            ["F", 250],
            [null, 50],
            ["G4", 500],
            [null, 50],
            ["F", 350],
            [null, 50],
            ["A", 125],
            [null, 50],
            ["C5", 500],
            [null, 50],
            ["A", 375],
            [null, 50],
            ["C5", 125],
            [null, 50],
            ["E5", 650],
            [null, 50],
            [null, 500],

            ["A5", 500],
            [null, 50],
            ["A", 300],
            [null, 50],
            ["A", 150],
            [null, 50],
            ["A5", 500],
            [null, 50],
            ["G#5", 325],
            [null, 50],
            ["G5", 175],
            [null, 50],
            ["F#5", 125],
            [null, 50],
            ["F5", 125],
            [null, 50],
            ["F#5", 250],
            [null, 50],
            [null, 325],
            ["A4", 250],
            [null, 50],
            ["D#5", 500],
            [null, 50],
            ["D5", 325],
            [null, 50],
            ["C#5", 175],
            [null, 50],
            ["C5", 125],
            [null, 50],
            ["B", 125],
            [null, 50],
            ["C5", 250],
            [null, 50],
            [null, 350],

            ["F", 250],
            [null, 50],
            ["G4", 500],
            [null, 50],
            ["F", 375],
            [null, 50],
            ["C5", 125],
            [null, 50],
            ["A", 500],
            [null, 50],
            ["F", 375],
            [null, 50],
            ["C5", 125],
            [null, 50],
            ["A", 650],
            [null, 50],
            [null, 650]
        ]
        this.playSong(song, 100000);
    }
}