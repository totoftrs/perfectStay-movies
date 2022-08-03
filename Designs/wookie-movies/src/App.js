import React,{useEffect, useState} from 'react'
import axios from "axios"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from './Movie';
import Movies from './Movies';
import SearchMovie from './SearchMovie'


const apiUrl = "https://wookie.codesubmit.io/movies";
const authAxios = axios.create({
  baseURL : apiUrl,
  headers: {
    Authorization: `Bearer Wookie2021` 
  }
})

function App() {

  const [movies, setMovies] = useState([])

  const fetchData = async () => {
    try{
      const result = await authAxios.get(`${apiUrl}`)
      setMovies(result.data.movies)
    }catch(err){
      console.log (err.message)
    }
  }

  const array= [] 
  for (var n of movies){
    var res = n.genres
    res.map(elem => {
      array.push(elem)
    })
  }
  const genres = [...new Set(array)]
  useEffect(()=> {
        fetchData()
  },[])


  return (
    <BrowserRouter>
      <SearchMovie />
      <Routes>
        <Route path="/" element={<Movies genres={genres} movies={movies}/>} />
        <Route path="movie/:id" element={<Movie movies={movies}/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
