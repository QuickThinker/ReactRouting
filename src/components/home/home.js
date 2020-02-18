import React from "react";

import Block1Color from "../block1/block1";
import Block2Color from "../block2/block2";
import Block3Color from "../block3/block3";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

function Home() {
    const blockA = {
        margin: "20px",
        height: "100px",
        width: "100px",
        weight: "2px",
        borderColor:  "red",
        borderStyle: "solid",
        backgroundColor: "red"
    };
    const blockB = {
        margin: "20px",
        height: "100px",
        width: "100px",
        weight: "2px",
        borderColor:  "blue",
        borderStyle: "solid",
        backgroundColor: "blue"
    };
    const blockC = {
        margin: "20px",
        height: "100px",
        width: "100px",
        weight: "2px",
        borderColor:  "green",
        borderStyle: "solid",
        backgroundColor: "green"
    };

    return (

                <div>
                    <div style={blockA} >
                        <Link to={"/block1"}>Block 1
                        </Link>
                    </div>
                    <div style={blockB}>
                        <Link to={"/block2"}>Block 2
                        </Link>
                    </div>
                    <div style={blockC}>
                        <Link to={"/block3"}>Block 3
                        </Link>
                    </div>
                </div>
    )
}
export default Home;