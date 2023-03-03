/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"
import Image from "next/image"
const Header = () => {
    return (

        <div className="header flex items-center justify-start flex-wrap">
            <Link href="/">
                <Image className="header_icon w-[80px] cursor-pointer m-4" src='/logo.png' width={80} height={80} alt='imdb logo' />
            </Link>
            <Link href="/movies/popular" style={{ textDecoration: "none" }}><span className='mx-[30px] text-[1.3rem] cursor-pointer text-white hover:text-red-600'>Popular</span></Link>
            <Link href="/movies/toprated" style={{ textDecoration: "none" }}><span className='mx-[30px] text-[1.3rem] cursor-pointer text-white hover:text-red-600'>Top Rated</span></Link>
            <Link href="/movies/upcoming" style={{ textDecoration: "none" }}><span className='mx-[30px] text-[1.3rem] cursor-pointer text-white hover:text-red-600'>Upcoming</span></Link>
        </div>

    )
}

export default Header