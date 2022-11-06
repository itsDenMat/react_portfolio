import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
// IMPORT PROJECTS

function Projects() {
    return (
        <Container fluid className='project-section'>
            <Container>
                <h1 className='project-heading'>My Projects</h1>

                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    {/* INSERT PROJECT CONTENT HERE */}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;