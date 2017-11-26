export class Sample {

    tagged: boolean;

    constructor(
        public id: number,
        public name: string,
        public value: number,
    ) {
        this.tagged = value > 50;
    }
}
