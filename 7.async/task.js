class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(atTime, func, id) {
        if (!id) {
            throw new Error("Параметр id не передан!");
        }

        if (this.alarmCollection.some((item) => item.id === id)) {
            console.error("Будильник с таким id уже существует");
        } else {
            this.alarmCollection.push(
                {
                    id: id,
                    time: atTime,
                    callback: func,
                }
            );
        }
    }

    removeClock(id) {
        const index = this.alarmCollection.findIndex((item) => item.id === id);
        if (index === -1) {
            return false;
        } else {
            this.alarmCollection.splice(index, 1);
            return true;
        }
    }

    getCurrentFormattedTime() {
        let now = new Date();
        return ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2);
    }

    start() {
        if (this.timerId === null) {
            const timer = setInterval(() => {
                this.alarmCollection.filter((item) => item.time === this.getCurrentFormattedTime()).forEach((item) => item.callback());
            }, 10000);
            this.timerId = timer;
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach((item) => console.log(`Будильник №${item.id} заведен на ${item.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}