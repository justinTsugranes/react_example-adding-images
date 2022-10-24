import './App.css'
import screenshot from './assets/images/image1.jpg'

function App() {
  const randomImageURL = 'https://picsum.photos/seed/picsum/200/300'
  return (
    <div className='App'>
      <div>
        <h1>How to add images using three different methods</h1>
        <h2>Method 01</h2>
        <p>importing the image and then wrapping the import in curly braces</p>
        <img
          height={200}
          src={screenshot}
          alt='screenshot of embedded assets'
        />
        <h2>Method 02</h2>
        <p>Using 'require' to link to image in the images folder</p>
        <img
          height={200}
          src={require('./assets/images/image1.jpg')}
          alt='screenshot of embedded assets'
        />
        <h2>Method 03</h2>
        <p>
          Creating a const that links to the image URL and referencing that
          const in the image src
        </p>
        <img src={randomImageURL} height={200} width={300} alt='' />
      </div>
    </div>
  )
}

export default App
