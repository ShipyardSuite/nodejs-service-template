import React from "react";

export default class Home extends React.Component {

    componentDidMount() {
        document.title = "ShipyardSuite | Home";
    }

    render() {
        return (
            <div className="Home">TEST</div>
        );
    }
}