import React from "react";
import Book from "./book";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="antialiased">
      <Navbar feature={"BASIC CRUD"} />
      <div className="mt-10">
        <Book />
      </div>
    </div>
  );
}

export default App;
