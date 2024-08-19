import { BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer section" id="footer">
      <div className="container mx-auto w-full">
      
        <div className="row my-3">
          <div className='my-logo'>
            <div className='circle'><span className="firstLetter">A</span><div className="half-circle"></div></div>
            <span className="otherLetters" draggable="false">bid</span>
          </div>
        </div>
      
        <div className="row my-3">
          <p className="text">&copy; 2024 Copyright: <a href="https://github.com/AbidAlWassie" target="_blank" rel="noreferrer">Abid Al Wassie</a></p>
        </div>

        <div className="row mt-0 mb-3">
          <div className="social-container-lg">
            {/* <h3>Follow me:</h3> */}
            <div className="social-icons-lg">
              <a href="https://www.twitter.com/onemandev_io" target="_blank" rel="noreferrer"><BsTwitter/></a>
              <a href="https://www.youtube.com/channel/UCYVf_0t2qsjyHILRsLatlHg" target="_blank" rel="noreferrer"><BsYoutube/></a>
              <a href="https://github.com/AbidAlWassie" target="_blank" rel="noreferrer"><BsGithub/></a>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Footer
