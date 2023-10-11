import { Link, useParams } from 'react-router-dom';
import { useSingleBookQuery } from '../redux/features/books/bookApi';
import BookReview from '../components/BookReview';
import BookImage from '../assets/images/book.png'
import { Button } from '../components/UI/Button';
import NavBar from '../layouts/NavBar';

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
    <NavBar/>
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
          <Link to={`/update-book/${book?._id}`} > <Button className='bg-green-500 text-white font-bold'>UPDATE BOOK</Button></Link>
         
          <Button className='bg-red-500 text-white font-bold ml-5'>DELETE BOOK</Button>
        </div>
      </div>
      <BookReview id={id!}/>
    </>
  );
}
