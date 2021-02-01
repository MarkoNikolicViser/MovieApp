import React from 'react'

const Kartice=({movie})=>{

const url="https://www.imdb.com/title/"+movie.imdbID+"/"

    return(
        <a href={url}>
        <div className="kartica">
            <img src={movie.Poster} alt=""/>
            <div className="opis"> 
            <div className="opis-naslov">
            Movie Title
            <h3>{movie.Title}</h3>
            </div>
            <div className="opis-tip">
            Type of video
            <h3>{movie.Type}</h3>
            </div>
            <div className="opis-relise">
            Realise date
            <h3>{movie.Year}</h3>
            </div>
            </div>
        </div>
        </a>
    )
}
export default Kartice;