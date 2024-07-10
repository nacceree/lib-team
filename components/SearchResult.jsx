import React from 'react';
import { useParams } from 'react-router-dom';
import BooksData from '../books.json';

const SearchResult = () => {
    const { SearchName } = useParams();

    // Function to find matching book by name or author
    const findMatchingBook = () => {
        // Iterate through each book in the BooksData
        for (let book of Object.values(BooksData)) {
            // Check if the book title or author matches the SearchName (case insensitive)
            if (book.title.toLowerCase() === SearchName.toLowerCase() || book.author.toLowerCase() === SearchName.toLowerCase()) {
                return book; // Return the matched book
            }
        }
        return null; // Return null if no match found
    };

    // Call the function to find the matching book
    const matchingBook = findMatchingBook();

    return (
        <div>
            {matchingBook ? (
                <div>
                    <h2>{matchingBook.title}</h2>
                    <p>Author: {matchingBook.author}</p>
                    <p>Category: {matchingBook.category}</p>
                    <p>Description: {matchingBook.description}</p>
                </div>
            ) : (
                <p>No matching book found for "{SearchName}".</p>
            )}
        </div>
    );
};

export default SearchResult;