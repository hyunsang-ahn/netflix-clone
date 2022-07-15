import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from './axios'
import './Row.css'
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/'
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  useEffect(() => {
    // 만일 [] 라면 row가 로드될때 단 한번만 동작하고 다시 동작하지 않는다!
    // 만일 [movies] 라면 movies가 변할때마다 동작한다 즉, component did update의 역할을 한다.
    async function fetchData() {
      const requeset = await axios.get(fetchUrl)
      // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213"
      // console.log(requeset.data)
      setMovies(requeset.data.results)
      return requeset
    }
    fetchData()
  }, [])

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }
  const handleClick = (movie) => {
    console.log(movie)
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      console.log('movie?.original_title====',movie?.original_title)
      movieTrailer(movie?.original_title || movie?.original_name ||"")
        .then(url => {
          console.log(url)
          const urlPrarams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlPrarams.get('v'))
        })
        .catch(error => console.log(error))
    }
  }
  return (
    <div className='row'>
      {/* TITLE */}
      <h2>{title}</h2>
      {/* container -> posters */}
      <div className="row_posters">
        {movies.map((movie, i) => {
          return (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt={movie.name} />
          )
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;