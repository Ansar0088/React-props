import React from "react";
import Header from "./Componrnts/Header";
import Movies from "./Componrnts/Movies";
import {movies} from "./Componrnts/Movie";

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
  
        }}
      >
        {movies.map((e,index) => {
          return(
          <Movies
          Key={index}
          Title={e.Title}
          Year={e.Year}
          img={e.Poster}
           /> 
          )
        })}
      </div>
    </>
  );
}

export default App;
