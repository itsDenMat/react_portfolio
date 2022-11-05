import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/lib/Tab';
import TypeWriter from './TypeWriter';

function Home() {
    return (
        <section>
            <Container fluid className='home-section' id='home'>
                <Container className='home-content'>
                    <Row>
                        <Col md={6} className='home-header'>
                            <h1 style={{ paddingBottom: 15 }} className='heading'>
                                Hello!{" "}
                                <span className='wave' role='img' aria-labelledby='wave'>
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className='heading-name'>
                                I'm <strong className='main-name'>Dennis Mateo</strong>
                            </h1>

                            <p className='heading-decription blockquote'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Placeat debitis ex a cumque delectus eaque, corrupti ipsum blanditiis, 
                            sequi adipisci ea ipsam illum? Perferendis id enim, harum totam itaque culpa!
                            </p>

                            <div className='heading-type'>
                                <TypeWriter />
                            </div>    
                        </Col>

                        <Col md={5}>
                            {/* ADD IMAGE/AVATAR HERE */}
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='home-about-section' id='about'>
                <Container>
                    <Row>
                        <Col md={12} className='home-about-social'>
                            <h2>Let's Stay in Touch</h2>
                            <p>
                                {" "}
                                If you have any questions, just want to say hi,
                                or would like to talk about a possible future project collaborations.
                                <br />
                                <strong> CONTACT ME</strong>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;