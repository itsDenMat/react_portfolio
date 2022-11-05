import React from 'react';
import Card from "react-bootstrap/Card";
import { GrPin } from "react-icons/gr";

function AboutCard() {
    return (
        <Card className='quote-card-view'>
            <Card.Body>
                <blockquote className='blockquote mb-0'>
                    <p style={{ textAlign: 'justify' }}>
                        {/* LEAVE SHORT BIO */}
                    </p>

                    <ul>
                        <li className='about-activity'>
                            <GrPin /> {/*THINGS I LIKE TO DO */}
                        </li>
                        <li className='about-activity'>
                            <GrPin /> {/*THINGS I LIKE TO DO */}
                        </li>
                        <li className='about-activity'>
                            <GrPin /> {/*THINGS I LIKE TO DO */}
                        </li>
                        <li className='about-activity'>
                            <GrPin /> {/*THINGS I LIKE TO DO */}
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;