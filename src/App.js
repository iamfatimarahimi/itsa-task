// import router
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"; 
// import components
import Contact from './ContactPage/Contact.js';
import Main from './Main.js'
import Sample from './WorkSamples/Sample.js'
 export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Sample" element={<Sample/>} />
      </Routes>
  
    
    </Router>
  );
}

