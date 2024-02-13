import React from "react";
import "./App.css"; // Import Tailwind CSS
import RandomCats from "./component/randomcats";

function App() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <RandomCats />
    </div>
  );
}

export default App;
