import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(3,9)));
    },[])
  return (
    <BookCards books={books} headline="Other Books"/>
  )
}

export default OtherBooks