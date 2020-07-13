import React from "react";

import "./Card.css";

const card = props => (
    <div className='Card'>
        <br></br>
        <h2>{props.title}</h2>
        <img src={props.icon} alt='Icon' />
        <h3>{props.msg}</h3>
    </div>
);

export default card;
