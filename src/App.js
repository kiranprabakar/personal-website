import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import WorkExperience from './Pages/WorkExperience';
import Contact from './Pages/Contact';
import WrongPage from './Pages/WrongPage';
import Hobbies from './Pages/Hobbies';

function App() {
  return (
    // Keeping the default create-react-app layout bc why not
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="WorkExperience" element={<WorkExperience />} />
          <Route path="Hobbies" element={<Hobbies />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
