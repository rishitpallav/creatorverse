import './App.css'
import AddCreator from './components/pages/AddCreator'
import ShowCreators from './components/pages/ShowCreators'
import EditCreator from './components/pages/EditCreator'
import ViewCreator from './components/pages/ViewCreator'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <Router>
        <div className='navbar-container'>
            <nav>
                <ul>
                <li><h2>CreatorVerse</h2></li>
                </ul>
                <ul>
                <li><button className="secondary" onClick={() => {window.location.href = "/"}}>Show All Creators</button></li>
                <li><button className="secondary" onClick={() => {window.location.href = "/add"}}>Add New Creator</button></li>
                </ul>
            </nav>
          </div>
        <Routes>
          <Route exact path="/" element={<ShowCreators />} />
          <Route path="/add" element={<AddCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
          <Route path="/view/:id" element={<ViewCreator />} />
        </Routes>
      </Router>
    );
}

export default App
