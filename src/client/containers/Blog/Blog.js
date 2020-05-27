import React from "react";

export default class Blog extends React.Component {

    componentDidMount() {
        document.title = "ShipyardSuite | Blog";
    }

    render() {
        return (
            <div>Blog</div>
        );
    }
}