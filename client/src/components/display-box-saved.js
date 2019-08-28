import React from 'react';
import Card from 'react-bootstrap/Card';

const DisplayBoxSaved = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Here are the Books that you have saved</Card.Title>
                <Card.Text>
                    book description props go here
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default DisplayBoxSaved;