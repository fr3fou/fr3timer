class Solve {
    time: string
    scramble: string
    date: any
    constructor(time: string, scramble: string) {
        this.time = time;
        this.scramble = scramble;
        this.date = Date.now()
    }
}

export default Solve;