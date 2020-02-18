import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";


function Data(props) {


    const characterBlock = {
        minHeight: "100px",
        maxWidth: "200px",

    };

        const [iden] = React.useState(["0","1","2"]);
        const [name] =React.useState(["Tom","Jerry","Spike"]);
        const [age] = React.useState(["14","18","25"]);
        const [charColor] =React.useState(["blue","red","yellow"]);





    return (

                <div style={characterBlock}>
                    <h1>ID: {iden[props.match.params.id]}</h1>
                    <h2>Name: {name[props.match.params.id]}</h2>
                    <h3>Age: {age[props.match.params.id]}</h3>
                    <h4>Color: {charColor[props.match.params.id]}</h4>
                        <br>
                        </br>
                </div>

    )
}




export default Data;