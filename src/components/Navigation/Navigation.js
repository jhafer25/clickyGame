import React from "react";
import "./Navigation.css";

const Navigation = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">Puppy Clicker</a></li>
            <li
                className={props.message.indexOf('already') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span className="currentScore">{props.currentScore}</span> | Your Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navigation;