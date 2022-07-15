import React, { useEffect, useState } from 'react';
import axios from './axios'
import requests from './requests';
import './Banner.css'
const Banner = () => {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      )
      return request
    }
    fetchData()
  }, [])
  console.log('movie is..........',movie)
  function truncateString(str, num) {
    if (str?.length > num) {
      return str.substr(0, num -1) + "...";
    } else {
      return str;
    }
  }
  return (
    <>
      {/* 배경 이미지 필요 */}
      <header className='banner'
        style={{
          backgroundSize : "cover",
          backgroundImage : `url(
            "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
          )`,
          backgroundPosition : "center center"
        }}
      >
        {/* 타이틀 */}
        <div className='banner_contents'>
          <h1 className='banner_title'>{movie.title || movie.name || movie.original_name}</h1>
          <div className='banner_buttons'>
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>

          </div>
          <h1 className='banner_description'>{truncateString(movie?.overview, 150)}</h1>
        </div>
        {/* div  > 2개 버튼 */}
        {/* 설명 */}
        <div className='banner_fadeBottom'></div>

      </header>
    </>


  );
};

export default Banner;