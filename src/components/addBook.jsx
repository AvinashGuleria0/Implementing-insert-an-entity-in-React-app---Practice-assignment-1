import { useState } from "react";
import { useNavigate } from 'react-router-dom'


const AddBook = () => {
    const navigate = useNavigate();

    const [book, setBook] = useState({
        title: "",
        author: "",
        description: "",
        coverImage: "",
    });

    const handleChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value});    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submitted Book`, book);
        navigate('/');
    }
    
    return(
        <div>
            <h3>Add Your Book here</h3>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Title" type="text" value={book.title} onChange={handleChange} required />
                <input name="author" placeholder="Author" type="text" value={book.author} onChange={handleChange} required />
                <textarea name="description" placeholder="description" id="" value={book.description} onChange={handleChange} required></textarea>
                <input name="coverImage" placeholder="Image url" type="text" value={book.coverImage} onChange={handleChange} required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddBook;