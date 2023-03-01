import React from 'react'

import illu from "../assets/illustration-1.svg";

const Header = () => {
  return (
    <section class="features" id="features">
  <div class="container">
    <div class="left">
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>Fylo stores your most important files in one secure location.
      Access them wherever you need, share and collaborate with friends,
      family, and co-workers.</p>
      <div class="get-started">
        <form>
          <input type="text" placeholder="Enter your email..." />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
    <div class="right">
      <img src={illu} alt="illustration" />
    </div>
  </div>
</section>

  )
}

export default Header