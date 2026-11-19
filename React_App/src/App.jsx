import Home from './Pages/Home.jsx'
import CVBuilderPage from './Pages/cvBuilder.jsx';
import CoverLetterPage from './Pages/CoverLetter.jsx';
import Templates from './Pages/Templates.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//Router defines the destination and decides what page to display 
// i.e it decides what particular page to display when a user vists a page or a link

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cv-builder" element={<CVBuilderPage/>}/>
          <Route path="/cover-letter-builder" element={<CoverLetterPage/>}/>
          <Route path="/templates" element={<Templates/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
  
