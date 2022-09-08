import React, { FC } from "react";

const BookForm: FC = () => {
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
        />
        <input
          type="text"
          placeholder="Author"
          className="w-full px-4 py-1 ring-2"
        />
        <input
          type="number"
          placeholder="Number of pages"
          className="w-full px-4 py-1 ring-2"
        />
        <input
          type="number"
          min="2000"
          max="3000"
          step="1"
          placeholder="Publish year"
          className="w-full px-4 py-1 ring-2"
        />

        <textarea
          rows={4}
          className="w-full px-4 py-1 ring-2"
          placeholder="synopsis"
        ></textarea>

        <div className="space-x-2">
          <button className="px-4 py-1 bg-blue-300 border-2 border-blue-600">
            Save
          </button>
          <button className="px-4 py-1 bg-orange-300 border-2 border-orange-600">
            Clear Form
          </button>
        </div>
      </div>
    </>
  );
};

export default BookForm;
