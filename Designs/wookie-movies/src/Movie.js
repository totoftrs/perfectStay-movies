import React from 'react'
import {useParams} from "react-router";

function Movie({movies}) {
    const {id} = useParams()
    const findMovieId = movies?.find(movie => movie?.id === id)

    // console.log (findMovieId)
  return (
    <div className='container'>
        <img src= {findMovieId?.poster} alt={findMovieId}/>
       
    </div>
  )
}

export default Movie