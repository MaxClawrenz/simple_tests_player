import { makeAutoObservable, runInAction } from "mobx";
import { test } from "./test";
import { iTest } from "../interfaces/iTest";
import { iResults } from "../interfaces/iResults";

class player {
    test: iTest = test;
    current: number = 0;
    intervalId: ReturnType<typeof setInterval> | null = null;
    results: iResults[] = [];

    constructor(){
        makeAutoObservable(this);
    }

    start = () => {
        if (this.intervalId) return;
        runInAction(() => {
            this.test.status = "started";
            this.test.questions[this.current].state = "active";
            this.timerStart();
        })
    }
    timerStart = () => {
        if (this.intervalId) return;
    
        this.intervalId = setInterval(() => {
            runInAction(() => {
                if (this.test.time > 0) {
                    this.test.time -= 100; 
                } else {
                    clearInterval(this.intervalId!); 
                    this.intervalId = null; 
                    this.test.status = "finished"; 
                }
            });
        }, 100);
    };

    timerStop = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null; 
        }
    };
    
    nextQuestion = () => {
        runInAction(() => {
            if(this.current + 1 < this.test.questions.length){
                this.test.questions[this.current].state = "completed";
                this.current = ++this.current;
                this.test.questions[this.current].state = "active";
            }else{
                this.end();
            }
        })
    }

    end = () => {
        runInAction(() => {
            this.timerStop();
            this.test.status = "finished";
        })
    }

    recordResult = (name: string, answer: string) => {
        runInAction(() => {
            this.results.push({question: name, answer: answer});
        })
    }
    
}

export default new player()