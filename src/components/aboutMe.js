import { Link } from "gatsby"
import React from "react"

const aboutMe = () => (
    <div className="md:flex">
        <div className="text-xl leading-loose">
            <p className="text-4xl">👋</p>
            <p className="mt-4">I'm Andrew.</p>
            <p className="mt-4">Building <span className="highlight bg-purple-300"><Link to="/projects">things</Link></span> with
            code is my jam.</p>
            <p className="mt-4">Check out some of my <span className="highlight bg-green-300"><Link to="/articles">writing</Link></span> or <span className="highlight bg-blue-300"><Link to="/contact">say hi</Link></span>!
        </p>
            <p className="mt-4">You can find me on twitter as <a href="https://www.twitter.com/andrew_brooksie"><span className="highlight bg-orange-300">@andrew_brooksie</span></a>
            </p>
        </div>
    </div>
)

export default aboutMe
