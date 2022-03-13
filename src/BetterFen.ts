import { Unit, UnitType, UnitTeam } from "./Unit";

export class BetterFen {
    private _value: Unit[][];
    private readonly regexPattern: RegExp = /^[PBNRQKpbnrqk\/1-9]+$/;

    constructor(fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR") {
        if (this.regexPattern.test(fen)) {
            this._value = this.parseFenToArray(fen);
            return;
        }
        this._value = this.parseFenToArray("8/8/8/8/8/8/8/8");
    }

    private parseFenToArray(fen: string): Unit[][] {
        let value: Unit[][] = [];
        const fenrow = fen.split('/');

        for (let i = 0; i < fenrow.length; i++) {
            let row: Unit[] = [];

            for (let j = 0; j < fenrow[i].length; j++) {
                let char: string = fenrow[i][j];

                if (isNaN(parseInt(char))) {
                    let unit = new Unit(char);
                    row.push(unit);
                    continue;
                }

                this.placeEmpty(parseInt(char), row);
            }

            value.push(row);
        }

        return value;
    }

    private placeEmpty(n: number, arr: Unit[]): Unit[] {
        const unit = new Unit('-');

        for (let i = 0; i < n; i++) {
            arr.push(unit);
        }

        return arr;
    }

    public setFenByString(fen: string) {
        this._value = this.parseFenToArray(fen);
    }

    private createStringFen(): string {
        let fen: string = "";

        for (let i = 0; i < this._value.length; i++) {
            let empty = 0;

            for (let j = 0; j < this._value[i].length; j++) {
                if (this._value[i][j].type == UnitType.None) {
                    empty++;

                    if (j == this._value[i].length - 1) fen += empty;
                    continue;
                }

                if (empty > 0) {
                    fen += empty;
                    console.log(empty);
                    empty = 0;
                }

                let unit = UnitType[this._value[i][j].type].substring(0, 1);
                if (this._value[i][j].team == UnitTeam.Black) unit = unit.toLowerCase();

                fen += unit;
            }

            fen += "/";
        }

        return fen.substring(0, fen.length - 1);
    }

    public get stringValue(): string {
        return this.createStringFen();
    }

    public get value(): Unit[][] {
        return this._value;
    }

    public set value(fen: Unit[][]) {
        this._value = fen;
    }
}