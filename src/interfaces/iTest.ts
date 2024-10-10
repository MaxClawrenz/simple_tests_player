import { iQuestions } from "./iQuestions";

export interface iTest {
    name: string,
    time: number,
    status: "started" | "finished" | "ready",
    questions: iQuestions[]
}