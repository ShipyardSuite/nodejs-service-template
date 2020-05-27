import React from "react";

import { Menu, Container, Segment } from "semantic-ui-react";

import './Layout.sass';

export default class Layout extends React.Component {

    render() {
        return (
            <div className="test">
                <p className="conny">LAYOUT</p>
                <Container >
                    <Segment>{this.props.children}</Segment>
                </Container>
            </div>
        );
    }
}