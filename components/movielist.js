import React, { useEffect, useState } from "react"

import Cards from './card'


const MovieList = () => {

    const [movieList, setMovieList] = useState([])


    useEffect(() => {
        getData()
    }, [])



    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
    }

    return (
        <div className="p-[3rem]">
            <h2 className="text-[1.75rem] m-[2.5rem] text-white">POPULAR</h2>
            <div className="list__cards flex flex-wrap justify-center">
                {
                    movieList.map((movie) => {
                        return <Cards movie={movie} key={movie.id} />
                    })
                }
            </div>
        </div>
    )
}

export default MovieList