import { makeAutoObservable } from "mobx";
import { iTest } from "../interfaces/iTest";

//временный объект теста. в жальнейшем он должен приходить с сервера
export const test: iTest = makeAutoObservable({
    name: "География для самых маленьких",
    time: 1200000,
    status: "ready",
    questions: [
        {
            id: "1",
            name: "Какой океан самый большой?",
            state: "unanswered",
            type: "single",
            answers: [
                { name: "Тихий океан", correct: true },
                { name: "Атлантический океан", correct: false },
                { name: "Индийский океан", correct: false }
            ],
            correctAnswer: null 
        },
        {
            id: "2",
            name: "Какой континент является самым населённым?",
            state: "unanswered",
            type: "select",
            answers: [
                { name: "Азия", correct: true },
                { name: "Европа", correct: false },
                { name: "Африка", correct: false }
            ],
            correctAnswer: null 
        },
        {
            id: "3",
            name: "Назовите столицу Франции.",
            state: "unanswered",
            type: "short",
            answers: [],
            correctAnswer: "Париж" 
        },
        {
            id: "4",
            name: "Какой город является столицей Австралии?",
            state: "unanswered",
            type: "full",
            answers: [],
            correctAnswer: "Канберра" 
        },
        {
            id: "5",
            name: "Какой самый высокий водопад в мире?",
            state: "unanswered",
            type: "single",
            answers: [
                { name: "Анхель", correct: true },
                { name: "Ниагарский", correct: false },
                { name: "Игуасу", correct: false }
            ],
            correctAnswer: null 
        },
        {
            id: "6",
            name: "Какой из этих островов самый большой?",
            state: "unanswered",
            type: "select",
            answers: [
                { name: "Гренландия", correct: true },
                { name: "Новая Гвинея", correct: false },
                { name: "Мадагаскар", correct: false }
            ],
            correctAnswer: null 
        },
        {
            id: "7",
            name: "Назовите реку, которая является самой длинной в мире.",
            state: "unanswered",
            type: "short",
            answers: [],
            correctAnswer: "Амазонка" 
        },
        {
            id: "8",
            name: "Какой материк является родиной пингвинов?",
            state: "unanswered",
            type: "full",
            answers: [],
            correctAnswer: "Антарктида" 
        },
        {
            id: "9",
            name: "Какой из этих государств не является членом ЕС?",
            state: "unanswered",
            type: "single",
            answers: [
                { name: "Швейцария", correct: true },
                { name: "Франция", correct: false },
                { name: "Германия", correct: false }
            ],
            correctAnswer: null 
        },
        {
            id: "10",
            name: "Какой самый крупный пустынный регион в мире?",
            state: "unanswered",
            type: "select",
            answers: [
                { name: "Сахара", correct: true },
                { name: "Атакама", correct: false },
                { name: "Гоби", correct: false }
            ],
            correctAnswer: null 
        },
        {
            id: "11",
            name: "Назовите столицу Японии.",
            state: "unanswered",
            type: "short",
            answers: [],
            correctAnswer: "Токио" 
        },
        {
            id: "12",
            name: "Какой океан расположен на востоке от Австралии?",
            state: "unanswered",
            type: "full",
            answers: [],
            correctAnswer: "Тихий океан" 
        },
        {
            id: "13",
            name: "Какой из этих горных хребтов является самым высоким?",
            state: "unanswered",
            type: "single",
            answers: [
                { name: "Гималаи", correct: true },
                { name: "Альпы", correct: false },
                { name: "Анды", correct: false }
            ],
            correctAnswer: null 
        },
        {
            id: "14",
            name: "Назовите самую большую страну по площади.",
            state: "unanswered",
            type: "short",
            answers: [],
            correctAnswer: "Россия" 
        },
        {
            id: "15",
            name: "Какой из этих водоемов является самым глубоким?",
            state: "unanswered",
            type: "select",
            answers: [
                { name: "Марианская впадина", correct: true },
                { name: "Дон", correct: false },
                { name: "Нил", correct: false }
            ],
            correctAnswer: null 
        }
    ]    
})