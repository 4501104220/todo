import {Home} from '../components/container/HomePage/home';
import {History} from '../components/container/History/history.js';
import {Intro} from '../components/container/Intro/intro';
import { TodoAppTimeline } from '../components/container/Timeline/todoAppTimeline';

export const routes = [
    {
        path: "/home",
        component: Home,
        label: "Home"
    },    
    {
        path: "/timeline",
        component: TodoAppTimeline,
        label: "Timeline"
    }, 
    {
        path: "/history",
        component: History,
        label: "History"
    },  
    {
        path: "/intro",
        component: Intro,
        label: "Intro"
    },
    {
        path: "*",
        component: Home,
    }
];