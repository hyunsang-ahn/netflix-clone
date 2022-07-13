import React, { useState, useEffect } from 'react';
import axios from './axios'

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    // 만일 [] 라면 row가 로드될때 단 한번만 동작하고 다시 동작하지 않는다!
    // 만일 [movies] 라면 movies가 변할때마다 동작한다 즉, component did update의 역할을 한다.
    async function fetchData(){
      const requeset = await axios.get(fetchUrl)
      // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213"
      console.log(requeset.data)
      return requeset
    }
    fetchData()
  }, [])
  return (
    <div>
      {/* TITLE */}
      <h2>{title}</h2>
      {/* container -> posters */}

    </div>
  );
};

export default Row;