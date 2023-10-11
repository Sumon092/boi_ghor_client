import { useParams } from 'react-router-dom';
import { useSingleBookQuery } from '../redux/features/books/bookApi';
import BookReview from '../components/BookReview';
import BookImage from '../assets/images/book.png'

export default function BookDetails() {
  const { id } = useParams();

  const { data: items, isLoading, error } = useSingleBookQuery(id);
  const book=items?.book;
  const publicationDate=items?.book?.publication_date?.split('T')[0]
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching book.</div>;
  }
  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 h-[80vh]">
        <div className="w-[50%]">
          <img className='w-full h-full' src={BookImage} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Author: {book?.author}</p>
          <p className="text-lg">Genre: {book?.genre}</p>
          <p className="text-md">Publication Date: {publicationDate}</p>
          <ul className="space-y-1 text-lg">
            {book?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <BookReview id={id!}/>
    </>
  );
}
