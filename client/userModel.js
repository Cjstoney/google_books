var mongoose = require('mongoose');

let Schema = mongoose.Schema;

/* title - Title of the book from the Google Books API
authors - The books's author(s) as returned from the Google Books API
description - The book's description as returned from the Google Books API
image - The Book's thumbnail image as returned from the Google Books API
link - The Book's information link as returned from the Google Books API

Creating documents in your books collection similar to the following:*/

let BookSchema = new Schema({

    title:{
        type: String,
        trim: true,
        required: "String is required"
    },

    authors: {
        type: String,
        trim: true,
        required: "String is required"
    },

    description:{
        type: String,
        trim: true,
        required: "String is required"
    },
    image:{
        type: String,
        trim: true,
        required: "String is required"
    },
    link:{
        type: String,
        trim: true,
        required: "String is required"
    },

});

var Book = mongoose.model("Book", BookSchema);

module.exports = Book;