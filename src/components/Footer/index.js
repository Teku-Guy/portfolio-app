import React from "react";
import { Container, Anchor } from "react-bootstrap";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
    const links = {
        twitter: "https://twitter.com/teku_guy",
        linkedIn: "https://www.linkedin.com/in/gustavo-muratalla/",
        github: "https://github.com/teku-guy"
    }

    //return JSX
    return (
        <footer className="fixed-bottom bg-dark text-center text-white footer">
            <Container fluid className="p-4 pb-0">
                <section className="icons mb-4">
                    <Anchor className="btn btn-outline-light btn-floating m-1" href={links.twitter} target="_blank" role="button" >
                        <FaTwitter />
                    </Anchor>
                    <Anchor className="btn btn-outline-light btn-floating m-1" href={links.linkedIn} target="_blank"  role="button">
                        <FaLinkedinIn />
                    </Anchor>
                    <Anchor className="btn btn-outline-light btn-floating m-1" href={links.github} target="_blank"  role="button">
                        <FaGithub />
                    </Anchor>
                </section>
            </Container>
            <div className="p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2021 Copyright: <Anchor href={links.github} target="_blank"> Gustavo Muratalla </Anchor>
            </div>
        </footer>
    )
}

export default Footer;