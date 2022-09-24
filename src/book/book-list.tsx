import React, { FC, useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";

interface IBook {
  id: string;
  title: string;
  author: string;
  numberOfPages: number;
  publishedYear: number;
  synopsis: string;
}

const BookList: FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const getBooks = async () => {
    const querySnapshot = await getDocs(collection(db, "books"));
    var book: IBook[] = querySnapshot.docs.map((doc) => ({
      title: doc.data().title,
      author: doc.data().author,
      numberOfPages: doc.data().number_of_pages,
      publishedYear: doc.data().published_year,
      synopsis: doc.data().synopsis,
      id: doc.id,
    }));
    setBooks(book);
  };

  const handleEditBook = () => {};

  useEffect(() => {
    const booksCollectionRef = collection(db, "books");
    const unsubscribe = onSnapshot(
      booksCollectionRef,
      (snapshot) => {
        console.log("you called me!");
        var book: IBook[] = snapshot.docs.map((doc) => ({
          title: doc.data().title,
          author: doc.data().author,
          numberOfPages: doc.data().number_of_pages,
          publishedYear: doc.data().published_year,
          synopsis: doc.data().synopsis,
          id: doc.id,
        }));
        setBooks(book);
      },
      (error) => {
        console.log(error.message);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="bg-yellow-300 border-yellow-500 border-2 shadow px-4 py-2 ">
        List of Books
      </div>
      <div className="text-sm">
        <table className="w-full">
          <thead>
            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th className="px-4 py-3">Book Title</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Pages</th>
              <th className="px-4 py-3">Year</th>
              <th className="px-4 py-3">action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {books &&
              books.map((data, index) => {
                return (
                  <tr className="text-gray-700" key={index}>
                    <td className="px-4 py-2 border">{data.title}</td>
                    <td className="px-4 py-2 border">{data.author}</td>
                    <td className="px-4 py-2 border">{data.numberOfPages}</td>
                    <td className="px-4 py-2 border">{data.publishedYear}</td>
                    <td className="px-4 py-2 border">
                      <button className="px-2 py-1 bg-yellow-500 text-white">
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookList;
