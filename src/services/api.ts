import axios from "axios"

const API_URL = "http://localhost:3002"

export type Book = {
  id: string
  book_name: string
  description: string
  quantity: number
  price: string
  author_id: string
  category_id: string
  publisher_id: string
}

export async function getBookList(filters?: string) {
  try{
    const response = await axios.get<Book[]>(`${API_URL}/books?${filters}`)
    return response.data
  } catch(error){
    console.error(error)
    return []
  }
}
