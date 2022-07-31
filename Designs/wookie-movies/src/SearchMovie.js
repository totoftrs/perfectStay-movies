import React,{useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


// const apiUrl = `https://wookie.codesubmit.io/movies?q=${search}`;
const authAxios = axios.create({
  baseURL : `https://wookie.codesubmit.io/movies`,
  headers: {
    Authorization: `Bearer Wookie2021` 
  }
})

function SearchMovie() {
    const [search, setSearch] = useState('')
    const [suggestionsMovies, setSuggestionsMovies] = useState([])
   

      useEffect(()=> {
        const fetchData = async () => {
          try{
            const {data} = await authAxios.get(`https://wookie.codesubmit.io/movies?q=${search}`)
            if(search) {
              setSuggestionsMovies(data.movies)
            }
          }catch(err){
            console.log (err.message)
          }
        }
        fetchData()
  },[search])
  
  return (
    
        // <header>
        //     <div className='bloc1'>
        //         <h1>Wookie movies</h1>
        //         <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search movie"/>
        //     </div>
        //     <div className='bloc2'>
        //   {!suggestionsMovies.length ? <p>Votre film est introuvale </p> : 
        //     suggestionsMovies?.map(movie => <Link key={movie.id} style={{backgroundColor: 'white'}} to={`movie/${movie.id}`}> {movie.title} </Link>)
        //   }
        //   </div> 
        // </header>
        

         <header>
            <div className='bloc1'>
                <Link to='/' className='title'>Wookie movies</Link>
                <div className='wrapper-input'>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search movie"/>
                    <div className='bloc2'>
                        { 
                        suggestionsMovies.map(movie => <Link  onClick={()=> {setSearch(''); setSuggestionsMovies([])}}className='find-movie' key={movie.id} style={{backgroundColor: 'white'}} to={`movie/${movie.id}`}> {movie.title} </Link>)
                        }
                    </div>
                </div>
            </div> 
        </header>

        
  )
}

export default SearchMovie