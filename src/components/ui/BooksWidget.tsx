import Book from '../../types/books';
import './BooksWidget.css';

interface BooksWidgetProps {
  books: Book[];
  layoutType: "wrap" | "columns";
}

const BooksWidget: React.FC<BooksWidgetProps> = ({books, layoutType}) => {
  
  const renderBook = (book: Book, index: number) => {
    if (layoutType === "wrap") {
      return (
        <div key={index} className="mb-12">
          <a href={book.detail_page_url}>
            <img src={book.cover_url} alt={book.title} className="w-48 float-left mr-5" />
          </a>
          {book.title && <p><strong>Title:</strong> {book.title}</p>}
          {book.author && <p><strong>Author:</strong> {book.author}</p>}
          {book.description && <p><strong>Description:</strong> {book.description}</p>}
          {book.pdf_url && 
          <a href={book.pdf_url}>
            <button>Download</button>
          </a>
          }
          <div className="clear-both"></div>
        </div>
      );
    } else {
      return (
        <div key={index} className="flex flex-col sm:flex-row mb-12">
          <div className="sm:mr-5 flex-shrink-0 mb-5 sm:mb-0">
              <a href={book.detail_page_url}>
                  <img src={book.cover_url} alt={book.title} className="w-full sm:w-48" />
              </a>
          </div>
          <div className="flex-grow">
              {book.title && <p><strong>Title:</strong> {book.title}</p>}
              {book.author && <p><strong>Author:</strong> {book.author}</p>}
              {book.description && <p><strong>Description:</strong> {book.description}</p>}
              {book.pdf_url && 
              <a href={book.pdf_url}>
                  <button>Download</button>
              </a>
              }
          </div>
      </div>
      );
    }
  }

  return (
    <div>
      {books.map(renderBook)}
    </div>
  );
};

export default BooksWidget;
