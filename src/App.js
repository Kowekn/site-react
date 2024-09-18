
import './App.css';
import Home from './home.js'
import Head from './head.js';
import Download_main from './download/download_main.js';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Download_info from './download/download_info.js';
import Registro from './registro/registro.js';
import Telas from './telas/telas_main.js';
import Header from './header.js';
import Footer from './footer.js';
import Opiniao from './opinioes/opiniao.js';
import FAQ from './faq/faq.js';
import Links from './links/links.js';
import Contato from './contato/contato.js';



function App() {
  
  
  

  return (
    <div className={`App text-main`}>
    <Head></Head>
    
    
    
    <Router>
    
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="download" element={<Download_main />} />
        <Route path="download/info" element={<Download_info />} />
        <Route path="registro" element={<Registro />} />
        <Route path="telas" element={<Telas />} />
        <Route path="opiniao" element={<Opiniao />} />
        <Route path="FAQ" element={<FAQ/>} />
        <Route path="links" element={<Links/>} />
        <Route path="contato" element={<Contato/>} />
      </Routes>
      <Footer></Footer>
      
    </Router>
    
    </div>
    
  );
}

export default App;
