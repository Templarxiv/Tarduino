import * as React from "react";
import * as ReactDOM from "react-dom";
import axios from 'axios';


export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, any> {
    constructor() {
        super();
        this.state = { statusText: "" };
    }
    start() {
        globalVar.callback = (data) => {
            this.setState({ statusText: data });
        };
        rest.get('StartArd');
    };
    render() {
        var html =
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <button onClick={this.start.bind(this)}>Go</button>
                <h3>Status {this.state.statusText}</h3>
            </div>;
        return html;
    };
}

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);

var globalVar = {
    callback: null
};


var rest = {
    post(msg, data) {
        axios.post('http://localhost:3000/' + msg, data)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (response) {
                console.log(response.data);
            });
    },
    get(msg) {
        axios.get('http://localhost:3000/' + msg)
            .then(function (response) {
                globalVar.callback(response);
            })
            .catch(function (response) {
                globalVar.callback(response);
            });
    }
}

