import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { useMovieContext } from '../../contexts/MoviesContext'
import Tab from '../Tab/Tab'

function ResultsGrid() {
    const {data} = useMovieContext()
    console.log(data)
  return (
    <div>
        <Tab/>
        <MovieCard/>
    </div>
  )
}

export default ResultsGrid