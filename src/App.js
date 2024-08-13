import logo from './logo.svg';
import './App.css';
import Home from './home.js'
import Head from './head.js';
import Download_main from './download/download_main.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Donwload_info from './download/download_info.js';
import Registro from './registro/registro.js';



function App() {
  return (
    
    <div className="App">
    <Head></Head>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="download" element={<Download_main />} />
        <Route path="download/info" element={<Donwload_info />} />
        <Route path="registro" element={<Registro />} />
      </Routes>
    </Router>
    
    </div>
    
  );
}

export default App;
