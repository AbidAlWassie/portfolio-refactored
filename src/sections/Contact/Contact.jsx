import { BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="contact section" id="contact">
      <div className="container mx-auto my-40 w-full">
        <div className="contact-info">
          <div className="sub-heading">Contact</div>
          <div className="heading">Leave a message!</div>
          <div className="text">
            I will respond as soon as possible.
          </div>
          
          <div className="v-list">
            <a href="mailto:abidalwassie@outlook.com" className="mail">abidalwassie@outlook.com</a>
            <FaArrowRight className="slide-icon"/>
          </div>

          <div className="social-container-lg mt-14">
            {/* <h3>Follow me:</h3> */}
            <div className="social-icons-lg">
              <a href="https://www.twitter.com/onemandev_io" target="_blank" rel="noreferrer"><BsTwitter/></a>
              <a href="https://www.youtube.com/channel/UCYVf_0t2qsjyHILRsLatlHg" target="_blank" rel="noreferrer"><BsYoutube/></a>
              <a href="https://github.com/AbidAlWassie" target="_blank" rel="noreferrer"><BsGithub/></a>
            </div>
          </div>
        </div>

        <form className="contact-form" action="https://formspree.io/f/mdobjjbo" method="POST">
          <h3>Send me a message</h3>
          <input name="name" type="text" className="form-input" placeholder="Your name" required/>
          <input name="email" type="email" className="form-input" placeholder="Your email" required/>
          <textarea name="message" placeholder="Your message" className="form-input" id="" required></textarea>
          <input type="submit" className="btn" placeholder="Send" value="Send Message"/>
        </form>
      </div>
    </div>
  )
}

export default Contact
