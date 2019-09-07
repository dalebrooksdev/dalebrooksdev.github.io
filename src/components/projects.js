import { Link } from "gatsby"
import React from "react"
import timelyncBanner from "../images/timelync.png"

const projects = () => (
    <div className="md:flex">
        <div className="md:flex-shrink-0">
            <img className="rounded-lg md:w-56"
                src={timelyncBanner}
                alt="A person holding up an old school clock on a blue background!" />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
            <a href="https://www.timelync.com" target="_blank"
                className="block text-lg leading-tight font-semibold text-gray-900 hover:underline">Timelync</a>
            <div className="uppercase tracking-wide text-xl text-gray-400 font-bold mt-1">
                <a href="https://github.com/dalebrooksdev/timelync" target="_blank"><i
                    className="fab fa-github mr-1 hover:text-gray-500"></i></a>
                <a href="https://www.timelync.com" target="_blank"><i
                    className="fas fa-globe hover:text-gray-500"></i></a>
            </div>
            <p className="mt-2 text-gray-600">
                Timelync is a freelance management application that makes tracking
                client projects and billable hours easier.
                        </p>
            <div className="py-4">
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#laravel</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#php</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#aws</span>
            </div>
        </div>
    </div>
)

export default projects


