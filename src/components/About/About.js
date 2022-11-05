import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutCard from './AboutCard';
// Add Required Imports

function About() {
    return (
        <Container fluid className='about-section'>
            <Container>
                <Row style={{ justifyContent: 'center', padding: '10px' }}>
                    <Col md={7} style={{ justifyContent: 'center', paddingTop: '30px', paddingBottom: '50px' }}>
                        <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
                            <strong className='purple'>About Me</strong>
                        </h1>
                        <AboutCard />
                    </Col>

                    <Col md={5} style={{ paddingBottom:'50px' }} className='about-img'>
                        {/* INSERT IMAGE */}
                    </Col>
                </Row>

                <Row className='skill-tools-wrapper'>
                    <Col className='skill-wrapper'>
                        <h1 className='project-heading'> Professional Skillset</h1>
                        {/* INSET RATING HERE */}
                    </Col>

                    <Col className='skill-wrapper'>
                        <h1 className='project-heading'>Tools I Use</h1>
                        {/* INSERT TOOLS LIST HERE */}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default About;