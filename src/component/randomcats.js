import React, { useState, useEffect } from "react";
import axios from "axios";

// Define the API endpoint
const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";

const RandomCats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // Function to fetch cat data from the API
    const fetchCats = async () => {
      try {
        // Make the HTTP GET request to the API
        const response = await axios.get(API_URL);

        // Extract the cat data from the response
        const catData = response.data;

        // Update the state with the fetched cat data
        setCats(catData);
      } catch (error) {
        console.error("Error fetching cat data:", error);
      }
    };

    // Call the fetchCats function when the component mounts
    fetchCats();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Random Cats</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ms-5">
        {cats.map((cat) => (
          <div key={cat.id} className="cat-card">
            <a href={cat.url} target="_blank" rel="noopener noreferrer">
            <img src={cat.url} alt="Cat" className="rounded-lg shadow-lg fixedImages hover:cursor-pointer" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomCats;
