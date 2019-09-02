import { Link } from "gatsby"
import React from "react"

const aboutMe = () => (
    <div class="text-xl leading-loose">
        <p class="text-4xl">👋</p>
        <p class="mt-4">I'm Andrew.</p>
        <p class="mt-4">Building <span class="highlight bg-purple-300"><Link to="/projects">things</Link></span> with
            code is my jam.</p>
        <p class="mt-4">Check out some of my
            <span class="highlight bg-green-300"><Link to="/articles">writing</Link></span> or
            <span class="highlight bg-blue-300"><Link to="/contact">say hi</Link></span>!
        </p>
        <p class="mt-4">You can find me on twitter as
            <a href="https://www.twitter.com/andrew_brooksie"><span class="highlight bg-orange-300">@andrew_brooksie</span></a>
        </p>
    </div>
)

export default aboutMe
