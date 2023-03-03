import React from 'react'
import Header from '@/components/header'
import MovieList from '@/components/movielist'

function popular() {
    return (
        <div className='bg-black min-h-screen'>
            <Header />
            <MovieList />
        </div>
    )
}

export default popular