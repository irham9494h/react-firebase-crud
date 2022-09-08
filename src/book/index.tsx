import React, { FC } from "react";
import BookList from "./book-list";
import BookForm from "./form";

const Book: FC = () => {
  return (
    <div className="max-w-4xl mx-auto flex gap-2">
      <div className="w-2/6 space-y-2">
        <BookForm />
      </div>
      <div className="w-4/6 space-y-2">
        <BookList />
      </div>
    </div>
  );
};

export default Book;
