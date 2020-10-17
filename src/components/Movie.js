import React from 'react';


const Movie =({title , poster_path , overview , vote_average}) =>{ 

  const imageApi =   'https://image.tmdb.org/t/p/w1280' ;         // from the API website

    
  return (                             //show the data for each item from API
    <div className="Movie">

     <div className='contain'> <img src={imageApi+poster_path}   alt='' />
       <div className='overview'>{overview}</div>
     </div>

      <h1>{title}</h1>
      <span>{vote_average}</span> 
       
    </div>
  );
}

export default Movie;
