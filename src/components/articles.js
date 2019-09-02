import { Link } from "gatsby"
import React from "react"

const articles = () => (
    <div className="md:flex">
        <div className="md:flex-shrink-0">
            <a href="https://dev.to/andrew_brooksie/setting-up-laravel-local-dev-environment-on-ubuntu-51kp"
                target="_blank">
                <img className="rounded-lg md:w-56"
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--0ZD2kTDS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--i6NjFRPZ--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/dic0huc04ihdj1a3ik1w.png"
                    alt="Setting Up Laravel On Ubuntu" /></a>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
            <a href="https://dev.to/andrew_brooksie/setting-up-laravel-local-dev-environment-on-ubuntu-51kp"
                target="_blank" className="block text-lg leading-tight font-semibold text-gray-900 hover:underline">Setting Up
                A
              Laravel Local Dev Environment On Ubuntu</a>

            <p className="mt-2 text-gray-600">
                Let's get a simple Laravel dev environment running on Ubuntu desktop 19.04 & 18.04 including a complete
                MySQL database connection.
            </p>

        </div>
    </div>
)

export default articles


