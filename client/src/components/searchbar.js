import React from 'react';
import { Form, FormControl, Button } from "react-bootstrap"

const SearchBar = () => {
    return(
    <Form>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search for a book!</Button>
    </Form>
    )
}

export default SearchBar;