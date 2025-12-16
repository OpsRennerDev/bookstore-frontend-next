'use client'
import BookCard from "@/src/components/BookCard";
import { Book, getBookList } from "@/src/services/api";
import { useEffect, useState } from "react";

export default function ShopScreen(){
  const [books, setBooks] = useState<Book[]>([])

  useEffect(()=> {
    const fetchBooks = async () => {
      const data = await getBookList()
      setBooks(data)
    }

    fetchBooks()
  },[])

  return (
    <div className="container mx-auto"> 
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}