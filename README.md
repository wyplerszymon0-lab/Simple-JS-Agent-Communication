# Simple JS Agent Communication 

A lightweight demonstration of **Multi-Agent Systems** built with Node.js. This project showcases how independent agents can communicate using an asynchronous **Event Bus** pattern.

##  Overview

The system consists of two primary agents:
* **Agent Alpha (Requester)**: Responsible for generating and sending tasks.
* **Agent Beta (Processor)**: An asynchronous worker that listens for tasks, processes data, and emits results back to the system.

##  Tech Stack
* **Language**: JavaScript (Node.js)
* **Architecture**: Event-Driven (using built-in `EventEmitter`)
* **Environment**: Node.js v24+

##  Project Structure
* `agents.js` - The main entry point containing Agent logic and the Event Bus.
* `README.md` - Project documentation.

##  How It Works
1. **Emitter**: Agent Alpha emits a `task_sent` event with a payload.
2. **Listener**: Agent Beta reacts to the event, processes the string (conversion to uppercase), and waits for a simulated delay.
3. **Feedback**: Once finished, the system confirms the task completion.

##  Quick Start
Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
node agents.js
