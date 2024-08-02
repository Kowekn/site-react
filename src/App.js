import logo from './logo.svg';
import './App.css';
import Home from './home.js'
import Head from './head.js';
import Download from './download.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    
    <div className="App">
    <Head></Head>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="download" element={<Download />} />
      </Routes>
    </Router>
    
    </div>
    
  );
}

export default App;
