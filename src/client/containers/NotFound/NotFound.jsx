import React from "react";

export default class NotFound extends React.Component {

    componentDidMount() {
        document.title = "ShipyardSuite | 404 - Not found";
    }

    render() {
        return (
            <div className="Home">FILE NOT FOUND...</div>
        );
    }
}