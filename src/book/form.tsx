import React, { FC, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const BookForm: FC = () => {
  const [bookTitle, setBookTitle] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [publishedYear, setPublishedYear] = useState<number>(0);
  const [synopsis, setSynopsis] = useState<string>();

  const handleAddDocument = async () => {
    try {
      const book = await addDoc(collection(db, "books"), {
        title: bookTitle,
        author: author,
        number_of_pages: numberOfPages,
        published_year: publishedYear,
        synopsis: synopsis,
      });

      if (book) {
        hanldeResetForm();
      }
    } catch (error) {}
  };

  const hanldeResetForm = () => {
    setBookTitle("");
    setAuthor("");
    setNumberOfPages(0);
    setPublishedYear(0);
    setSynopsis("");
  };

  return (
    <>
      <div className="bg-green-300 border-green-500 border-2 shadow px-4 py-2 ">
        Book Form
      </div>

      <div className="bg-gray-200 shadow p-4 text-sm space-y-2">
        <input
          type="text"
          placeholder="Book title"
          className="w-full px-4 py-1 ring-2"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="w-full px-4 py-1 ring-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of pages"
          className="w-full px-4 py-1 ring-2"
          value={numberOfPages}
          onChange={(e) => setNumberOfPages(Number(e.target.value))}
        />
        <input
          type="number"
          min="2000"
          max="3000"
          step="1"
          placeholder="Publish year"
          className="w-full px-4 py-1 ring-2"
          value={publishedYear}
          onChange={(e) => setPublishedYear(Number(e.target.value))}
        />

        <textarea
          rows={4}
          className="w-full px-4 py-1 ring-2"
          placeholder="synopsis"
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
        />

        <div className="space-x-2">
          <button
            className="px-4 py-1 bg-blue-300 border-2 border-blue-600"
            onClick={handleAddDocument}
          >
            Save
          </button>
          <button
            className="px-4 py-1 bg-orange-300 border-2 border-orange-600"
            onClick={hanldeResetForm}
          >
            Clear Form
          </button>
        </div>
      </div>
    </>
  );
};

export default BookForm;
