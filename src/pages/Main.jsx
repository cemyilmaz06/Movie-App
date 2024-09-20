import React from "react";


const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  
  return 
  <>
<form  className="flex justify-center p-2">
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search a movie..."
          
        />
        <button className="btn-danger-bordered">Search</button>
      </form>
      <div className="flex flex-wrap justify-center ">
        
      </div>
  </>;
};

export default Main;
