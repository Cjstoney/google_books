import React from 'react';
import Card from 'react-bootstrap/Card';

const DisplayBoxReturned = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Book Title prop</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Author:</Card.Subtitle>
                <Card.Text>
                    <h4>Description:</h4>
                    book description props go here
                </Card.Text>
                <Card.Link href="#">Save this book.</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default DisplayBoxReturned;