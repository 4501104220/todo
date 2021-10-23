import React, {useContext} from 'react';
import {TodoContext} from '../../../context/todoContext';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {ReactComponent as WorkIcon} from "./work.svg";
import {ReactComponent as SchoolIcon} from "./school.svg";

export function TodoAppTimeline(update) {
    const {todos} = useContext(TodoContext);
    return (
        <div>
            <VerticalTimeline>
                {todos.map((item) => {
                    return (
                        <VerticalTimelineElement
                            key={item.id}
                            // date={item.deadline}
                            className="vertical-timeline-element--work"
                            iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
                            contentStyle={{color: "rgb(33, 150, 243)", background: "#fff"}}
                            contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                            icon={item.completed ? <SchoolIcon/> : <WorkIcon/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {item.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {item.deadline}
                            </h5>
                            {!item.completed && (
                                <p
                                    style={{
                                        padding: 9,
                                        margin: 3,
                                        backgroundColor: '#DC143C',
                                        color: 'white'
                                    }}
                                >
                                    Doing
                                </p>
                            )}
                            {item.completed && (
                                <p
                                    style={{
                                        padding: 9,
                                        margin: 3,
                                        backgroundColor: '#9ACD32',
                                        color: 'white'
                                    }}
                                >
                                    Done
                                </p>
                            )}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    );
};
