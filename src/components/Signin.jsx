import React from 'react'

const Signin = () => {
  return (
    <section class="sign-in" id="sign-in">

  <div class="left">
    <h1>Get early access today</h1>
    <div class="content">
      <p>
        It only takes a minute to sign up and our free starter tier is extremely generous.
        If you have any questions, our support team would be happy to help you.
      </p>
    </div>
  </div>

  <div class="right">
    <form>
      <input type="email" placeholder="email@example.com" />
      <button type="submit">
        Get Started For Free
      </button>
    </form>
  </div>
</section>
  )
}

export default Signin