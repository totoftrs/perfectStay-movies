import React from 'react'
import {useParams} from "react-router";

function Movie({movies}) {
    const {id} = useParams()
    const findMovieId = movies?.find(movie => movie?.id === id)
    const year = findMovieId?.released_on.split('-')[0]
    const cast = findMovieId?.cast
    console.log (cast)
  return (
    <div className='section'>
        <img src= {findMovieId?.poster} alt={findMovieId}/>
        <div className='container-info'>
          <div className='title__movie'>{findMovieId?.title}</div>
          <div>{year} | {findMovieId?.length} | {findMovieId?.director}</div>
          <div className='cast'>{findMovieId?.cast}</div>
          <div className='overview'>{findMovieId?.overview}</div>
        </div>
       
    </div>
  )
}

export default Movie