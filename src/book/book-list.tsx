import React, { FC } from "react";

const BookList: FC = () => {
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
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="text-gray-700">
              <td className="px-4 py-2 border">
                Crud using react and firebase
              </td>
              <td className="px-4 py-2 border">John Doe</td>
              <td className="px-4 py-2 border">250</td>
              <td className="px-4 py-2 border">2015</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookList;
