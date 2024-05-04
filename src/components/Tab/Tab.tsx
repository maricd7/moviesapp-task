import React from 'react'
import { useMovieContext } from '../../contexts/MoviesContext'

export default function Tab() {
    const {setTab} = useMovieContext()

  return (
    <div>
        <button onClick={() => setTab('movies')}>Movies</button>
        <button onClick={() => setTab('shows')}>TV Shows</button>
    </div>
  )
}
