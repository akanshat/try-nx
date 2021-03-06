import { getBooks } from '@myorg/books/data-access';
import { useEffect, useState } from 'react';
import { Books } from '@myorg/books/ui';
import { IBook } from '@myorg/shared-models';

export function BooksFeature() {
  const [books, setBooks] = useState([] as IBook[]);
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
