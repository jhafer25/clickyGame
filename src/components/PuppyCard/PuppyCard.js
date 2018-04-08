import React from "react";
import "./PuppyCard.css";

const PuppyCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectPuppy(props.name)} 
                className="imgLink"
            >
                <img className="rounded" alt={props.name} src={props.image} />
            </a>
        </div>
    </div>
);

export default PuppyCard;