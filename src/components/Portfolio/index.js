import React from "react";
import { Container } from "react-bootstrap";

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {

    return (
        <section className="portfolio pt-5">
            <Container>
                <h1 className="title">Portfolio</h1>
                <hr />
                <Wrapper id="card-data">
                    
                </Wrapper>
            </Container>
        </section>
    );
}

export default Portfolio;