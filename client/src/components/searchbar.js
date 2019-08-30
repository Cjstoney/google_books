import React from 'react';
import { Form, FormControl, Button } from "react-bootstrap"

const SearchBar = (props) => {
    return(
    <Form>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button onClick={()=>{
            props.BookSearch(
                // AIzaSyDu8HDqy0XvCEFgTfh-WGEr7yTKRPzHbUE
                // GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

            )
        }} variant="outline-success">Search for a book!</Button>
    </Form>
    )
}

export default SearchBar;