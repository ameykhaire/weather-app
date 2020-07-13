import React from "react";
import Card from "../../components/Card/Card";
import "./Weather.css";

const weather = props => {
    const fahrenheit = props.temp * 1.8 + 32;
    const temp = props.temp + " °C / " + fahrenheit.toFixed(1) + " °F";
    return (
        <div>
            <h2>Todays Weather: </h2>
            <Card title={props.date} icon={props.icon} msg={temp} />
        </div>
    );
};

export default weather;
