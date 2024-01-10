/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */


import React, { useEffect, useState } from "react"
import styles from '../../styles/movie.module.css'
import { useRouter } from "next/router"
import Header from '@/components/header'
import Link from "next/link"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const router = useRouter()
    const mid = router.query.mid
    // console.log(mid)
    useEffect(() => {
        getData()
        window.scrollTo(0, 0)

    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${mid}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }

    return (
        <div className="bg-black overflow-hidden min-h-screen">
            <Header />
            <div className={styles.movie}>
                <div className={styles.movie__intro}>
                    <img className={styles.movie__backdrop} src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
                </div>
                <div className={styles.movie__detail}>
                    <div className={styles.movie__detailLeft}>
                        <div className={styles.movie__posterBox}>
                            <img className={styles.movie__poster} src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                        </div>
                    </div>
                    <div className={styles.movie__detailRight}>
                        <div className={styles.movie__detailRightTop}>
                            <div className={styles.movie__name}>{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                            <div className={styles.movie__tagline}>{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                            <div className={styles.movie__rating}>
                                {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i className="fas fa-star" />
                                <span className={styles.movie__voteCount}>{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                            </div>
                            <div className={styles.movie__runtime}>{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                            <div className={styles.movie__releaseDate}>{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                            <div className={styles.movie__genres}>
                                {
                                    currentMovieDetail && currentMovieDetail.genres
                                        ?
                                        currentMovieDetail.genres.map(genre => (
                                            <><span className={styles.movie__genre} id={genre.id}>{genre.name}</span></>))
                                        :
                                        ""
                                }
                            </div>
                        </div>
                        <div className={styles.movie__detailRightBottom}>
                            <div className={styles.synopsisText}>Synopsis</div>
                            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                        </div>

                    </div>
                </div>
                <div className={styles.movie__links}>
                    <div className={styles.movie__heading}>Useful Links</div>
                    {
                        currentMovieDetail && currentMovieDetail.homepage && <Link href={currentMovieDetail.homepage} target="_blank" style={{ textDecoration: "none", margin: '2rem 0' }}><p><span className='flex justify-center items-center py-[0.8rem] px-[2rem] rounded-2xl cursor-pointer w-[150px] text-black font-bold bg-red-700 '>Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></Link>
                    }
                    {
                        currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{ textDecoration: "none", margin: '2rem 0' }}><p><span className='flex justify-center items-center py-[0.8rem] px-[2rem] rounded-2xl cursor-pointer w-[150px] text-black font-bold bg-[#f3ce13]'>IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                    }
                </div>
                <div className={styles.movie__heading}>Production companies</div>
                <div className={styles.movie__production}>
                    {
                        currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                            <>
                                {
                                    company.logo_path
                                    &&
                                    <span className={styles.productionCompanyImage} key={company.id}>
                                        <img className={styles.movie__productionComapany} src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                        <span>{company.name}</span>
                                    </span>
                                }
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Movie