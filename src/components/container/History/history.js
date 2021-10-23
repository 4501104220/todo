import React, {useContext} from 'react';
import {TodoContext} from '../../../context/todoContext';
import "./history.css";

export const History = () => {
    const {todos} = useContext(TodoContext);
    console.log(todos);

    return (
        <div className="History">
            <h1>
                History <span>Things Done</span>
            </h1>
            {todos.forEach((item) => {
                if (item.completed === true) {
                    console.log(item);
                    return (
                        <div>
                            <ul>
                                <li>{item.title}</li>
                                <li>{item.deadline}</li>
                                <li>
                                    {item.completed ? "Todo-task completed" : "Todo-task"}
                                </li>
                            </ul>
                        </div>
                    )
                }
            })}
        </div>
    )
};
