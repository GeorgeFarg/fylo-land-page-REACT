import React from 'react'

import quotes from "../assets/icon-quotes.svg";
import avatar from "../assets/avatar-testimonial.jpg";
import illu from "../assets/illustration-2.svg";

const Team = () => {
  return (
    <section class="team" id="team">
      <div class="background-curve"></div>
      <div class="content">
        <div class="container">
          <div class="left">
            <h1>Stay productive, wherever you are</h1>

            <p class="f-p">Never let location be an issue when accessing your files. Fylo has you
            covered for all of your file storage needs.
            </p>
            <p class="s-p">Securely share files and folders with friends, family and colleagues for
            live collaboration. No email attachments required!
            </p>
            <div class="explore-link-container">
              <a href="" class="explore-link">See how Fylo works 
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><circle id="b" cx="6" cy="6" r="6"/><filter x="-25%" y="-25%" width="150%" height="150%" filterUnits="objectBoundingBox" id="a"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.239215686 0 0 0 0 0.62745098 0 0 0 0 0.560784314 0 0 0 0.793506567 0" in="shadowBlurOuter1"/></filter></defs><g fill="none" fill-rule="evenodd"><g transform="translate(2 2)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#3DA08F" xlink:href="#b"/></g><path 
              d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z" fill="#FFF"/></g></svg>
              </a>
            </div>
            <div class="comment-box">
              <img src={quotes} alt="quotes" />
              <p class="comment-text"> Fylo has improved our team productivity by an order of magnitude. Since
                making the switch our team has become a well-oiled collaboration machine.
              </p>
              
              <div class="founder">
                <img src={avatar} alt="avatar" class="comment-avatar" />
                <div class="founder-info">
                  <h4>Kyle Burton</h4>
                  <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          </div>

          <div class="right">
            <img src={illu} alt="illustration" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team