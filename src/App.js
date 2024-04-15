import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Shaurya.
        </h1>
      </header>

      <h1 className='hello'><span>Hello!</span></h1>
      <p className='paragraph-1'>I'm Shaurya Singh, a programmer based in Bengaluru, India who started programming at the age of 6 in the year 2018. Scroll down to see more about me!</p>

      <h1 className='hello'><span className='skills'>Skills</span></h1>
      <p className='paragraph-1'>These are the skills I have mastered:</p><br></br>
      <div className='flex-bar'>

      <div className='card'>
        <p className='card-p'>HTML</p>
        <p className='card-p-span'>100% Mastered</p>
      </div>

      <div className='card'>
        <p className='card-p'>CSS</p>
        <p className='card-p-span'>100% Mastered</p>
      </div>

      <div className='card'>
        <p className='card-p'>JS</p>
        <p className='card-p-span'>100% Mastered</p>
      </div>

      <div className='card'>
        <p className='card-p'>React</p>
        <p className='card-p-span'>100% Mastered</p>
      </div>


      </div><br></br>

      <p className='paragraph-1'>Currently Mastering Skills:</p>
      <div className='flex-bar-2'>
      
      <div className='card'>
        <p className='card-p'>NextJS</p>
        <p className='card-p-span-2'>70% Mastered</p>
      </div>
      <div className='card'>
        <p className='card-p'>Python</p>
        <p className='card-p-span-2'>60% Mastered</p>
      </div>
      </div>

      <h1 className='hello'><span className='projects'>Projects</span></h1>
      <p className='paragraph-1'>These are some of the major, and small projects I have made:</p><br></br>
      <div className='flex-bar-2'>
      <div className='card-2'>
        <p className='card-p'>VideeCall</p>
        <p className='card-p'>Made with NextJS, shadcn-ui</p>
        <p className='card-p'><a href='https://videecall.netlify.app'>Visit Website</a></p>
      </div>
      <div className='card-2'>
        <p className='card-p'>CrobtnOS</p>
        <p className='card-p'>Made with HTML, CSS, JS</p>
        <p className='card-p'><a href='https://crobtnos.netlify.app/'>Visit Website</a></p>
      </div>
      <div className='card-2'>
        <p className='card-p'>Sperian TV (TV Interface UI)</p>
        <p className='card-p'>Made with HTML, CSS</p>
        <p className='card-p'><a href='https://speriantv.netlify.app/'>Visit Website</a></p>
      </div>
      <div className='card-2'>
        <p className='card-p'>Kart - The Ecommerce Site</p>
        <p className='card-p'>Made with React</p>
        <p className='card-p'><a href='https://shopatkart.netlify.app/'>Visit Website</a></p>
      </div>
      </div><br></br>

      <footer>
        Copyright &copy; 2024 Shaurya Singh's Portfolio • All rights reserved
        <a className='socials' href='https://github.com/ProgrammingBean'>Github</a>
        <a className='socials' href='https://twitter.com/CodgyCodish'>Twitter</a>
      </footer>
    </div>
  );
}

export default App;
