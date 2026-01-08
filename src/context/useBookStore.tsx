"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type {
  Author,
  Book,
  CatalogBook,
  Category,
  Publisher,
  User,
} from "../constants/types";

type CatalogState = {
  loading: boolean;
  error: string | null;

  authors: Author[];
  categories: Category[];
  publishers: Publisher[];
  users: User[];

  booksRaw: Book[];
  books: CatalogBook[];

  refresh: () => Promise<void>;
  getBookById: (id: string) => CatalogBook | undefined;
};

const CatalogContext = createContext<CatalogState | null>(null);

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3002";

async function fetchJSON<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Falha ao buscar ${path}: ${res.status}`);
  return res.json() as Promise<T>;
}

function enrichBooks(args: {
  books: Book[];
  authors: Author[];
  categories: Category[];
  publishers: Publisher[];
}): CatalogBook[] {
  const authorMap = new Map(args.authors.map((a) => [a.id, a]));
  const categoryMap = new Map(args.categories.map((c) => [c.id, c]));
  const publisherMap = new Map(args.publishers.map((p) => [p.id, p]));

  return args.books.map((b) => ({
    ...b,
    author: authorMap.get(b.author_id),
    category: categoryMap.get(b.category_id),
    publisher: publisherMap.get(b.publisher_id),
  }));
}

export function CatalogProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [publishers, setPublishers] = useState<Publisher[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [booksRaw, setBooksRaw] = useState<Book[]>([]);

  // books "enriquecidos" (memoizado)
  const books = useMemo(() => {
    return enrichBooks({ books: booksRaw, authors, categories, publishers });
  }, [booksRaw, authors, categories, publishers]);

  // função estável (não troca identidade a cada render)
  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const [a, b, c, p, u] = await Promise.all([
        fetchJSON<Author[]>("/authors"),
        fetchJSON<Book[]>("/books"),
        fetchJSON<Category[]>("/categories"),
        fetchJSON<Publisher[]>("/publishers"),
        fetchJSON<User[]>("/users"),
      ]);

      setAuthors(a);
      setBooksRaw(b);
      setCategories(c);
      setPublishers(p);
      setUsers(u);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, []);

  // função estável dependente de books (ok)
  const getBookById = useCallback(
    (id: string) => books.find((b) => b.id === id),
    [books]
  );

  useEffect(() => {
    refresh();
  }, [refresh]);

  // ✅ value com identidade estável
  const value = useMemo<CatalogState>(
    () => ({
      loading,
      error,
      authors,
      categories,
      publishers,
      users,
      booksRaw,
      books,
      refresh,
      getBookById,
    }),
    [
      loading,
      error,
      authors,
      categories,
      publishers,
      users,
      booksRaw,
      books,
      refresh,
      getBookById,
    ]
  );

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
}

export function useCatalog() {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error("useCatalog precisa estar dentro de <CatalogProvider />");
  return ctx;
}
