import React from 'react'
import { Link } from 'react-router-dom'

function Movies({genres,movies}) {
  return (
    <div className="App">
    <h1>Wookie movies</h1>
    {
      genres.map((item) =>(
        <div key={item}>
          <div className='categories'>{item}</div>
          <div className='container'>
            {
              movies.map((elem)=>{
                const inc = elem.genres.includes(item)
                if(inc){
                  return (
                    <Link to={`/movie/${elem.id}`} key={elem.id}>
                        <div>
                          <div>{elem.title}</div>
                          <img src={elem.backdrop} alt={elem.title}/>
                        </div>
                    </Link>
                
                  
                  )

                }
              }
              )
            }
          </div>
         
        </div>
      ))
    }
  
  </div>
  )
}

export default Movies