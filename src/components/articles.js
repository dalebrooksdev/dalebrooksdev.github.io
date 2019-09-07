import { Link } from "gatsby"
import React from "react"
import laravelDevBanner from "../images/laravel_dev_banner.png" // Tell Webpack this JS file uses this image

const articles = () => (
    <div className="md:flex">
        <div className="md:flex-shrink-0">
            <a href="https://dev.to/andrew_brooksie/setting-up-laravel-local-dev-environment-on-ubuntu-51kp"
                target="_blank">
                <img className="rounded-lg md:w-56"
                    src={laravelDevBanner}
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


