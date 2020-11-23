import { Container, Row, Col } from 'reactstrap';
import React from 'react';
import Header from '../Header';


function Layout(props) {
    return (
        <Container>
            <Row>
                <Col xl="12"><Header /></Col>
            </Row>
        </Container>
    );
}

export default Layout;