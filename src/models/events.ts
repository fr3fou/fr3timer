
class Event {
    name: string

    constructor(name: string) {
        this.name = name;
    }
}
const events = {
   '3x3x3': new Event('3x3x3'),
};

export default events;