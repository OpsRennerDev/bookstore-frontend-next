// IDs no seu mock são strings tipo "001"
export type Author = {
  id: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
};

export type Category = {
  id: string;
  category_name: string;
};

export type Publisher = {
  id: string;
  publisher_name: string;
  email: string;
  phone: string;
  bio: string;
  stars: number; // no mock é número (5)
};

export type User = {
  id: string;
  username: string;
  email: string;
  passworld: string; // tá assim no mock (typo), então mantive igual
};

export type Book = {
  id: string;
  book_name: string;
  description: string;
  quantity: number;

  // no mock vem string "59,60"
  // você pode manter string e formatar, ou converter pra number no front
  price: string;

  author_id: string;
  category_id: string;
  publisher_id: string;
};

// Livro "pronto pro catálogo" (com joins)
export type CatalogBook = Book & {
  author?: Author;
  category?: Category;
  publisher?: Publisher;
};

// (Opcional) tipo do db.json completo
export type MockDB = {
  authors: Author[];
  books: Book[];
  categories: Category[];
  publishers: Publisher[];
  users: User[];
};
