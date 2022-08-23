// Style
import style from '../styles/underContruction.module.css'


// Assets
import underContructionImage from '../public/underConstructionImage.png'

// Modules
import Image from 'next/image'

const about = () => {
  return (
    <div className='container'>
      <h2>
        Hi, I am Fred.  Nice to neet you.
      </h2>
      <div>
        <h3>
          Designer
        </h3>
        <p>
          I value simple, clean designs and thoughtful interactions.
        </p>

      </div>

      <div>
        <h3>
          Frontend Developer
        </h3>
        <p>
          I like coding things from scratch and enjoy brining ideas to life in the browser.
        </p>
      </div>

      <div>
        <h3>
          Backend Developer
        </h3>
        <p>
          I enjoy the thought that goes into creating a good, clean and simple backend.
        </p>
      </div>
      <style jsx>{
      `
        .container{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
      `
    }
    </style>
    </div>
    
  )
}



export default about