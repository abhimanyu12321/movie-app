/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"
import styles from '../styles/card.module.css'
import Link from "next/link"
import { CiStar } from 'react-icons/ci'

const Cards = ({ movie }) => {

    return <>
        {

            <Link href={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                <div className={styles.cards}>

                    <img className={styles.cards__img} src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                    <div className={styles.cards__overlay}>
                        <div className={styles.card__title}>{movie ? movie.original_title : ""}</div>
                        <div className={styles.card__runtime}>
                            {movie ? movie.release_date : ""}
                            <span className={styles.card__rating}>{movie ? movie.vote_average : ""}<CiStar /></span>
                        </div>
                        <div className={styles.card__description}>{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
                    </div>
                </div>
            </Link>
        }
    </>
}

export default Cards