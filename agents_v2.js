const { EventEmitter } = require('events');

const bus = new EventEmitter();

class Coordinator {
    constructor() {
        this.name = "Alpha";
    }

    sendJob(taskName) {
        console.log(`[${this.name}] New task created: ${taskName}`);
        bus.emit('new_job', { task: taskName, timestamp: new Date() });
    }

    listenForResults() {
        bus.on('job_done', (data) => {
            console.log(`[${this.name}] Confirmed! Job "${data.task}" finished in ${data.duration}ms`);
        });
    }
}

class Worker {
    constructor() {
        this.name = "Beta";
    }

    startWorking() {
        bus.on('new_job', async (data) => {
            console.log(`[${this.name}] Working on: ${data.task}...`);

            const start = Date.now();
            await new Promise(resolve => setTimeout(resolve, 2000)); 
            const end = Date.now();

            bus.emit('job_done', {
                task: data.task,
                duration: end - start
            });
        });
    }
}

const alpha = new Coordinator();
const beta = new Worker();

alpha.listenForResults();
beta.startWorking();

alpha.sendJob("Optimize Vision Model");
