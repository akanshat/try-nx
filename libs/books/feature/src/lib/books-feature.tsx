import { getBooks } from '@myorg/books/data-access';
import { useEffect, useState } from 'react';
import { Books } from '@myorg/books/ui';

export function BooksFeature() {
  const [books, setBooks] = useState<any[]>([]);
  useEffect(() => {
    getBooks().then((b) => setBooks(b));
  }, []);
  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={(book) => alert(`Added ${book?.title}`)} />
    </>
  );
}

export default BooksFeature;
