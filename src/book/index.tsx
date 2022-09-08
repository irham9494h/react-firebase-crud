import React, { FC } from "react";
import BookForm from "./form";

const Book: FC = () => {
  return (
    <div className="max-w-4xl mx-auto flex gap-2">
      <div className="w-2/6 space-y-2">
        <BookForm />
      </div>
      <div className="w-4/6">
        <div className="bg-yellow-300 border-yellow-500 border-2 shadow px-4 py-2 ">
          List of Books
        </div>
      </div>
    </div>
  );
};

export default Book;
