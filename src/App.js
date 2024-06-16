// import router
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"; 
// import components
import Contact from './ContactPage/Contact.js';
import Main from './Main.js'

 export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
          <Route path="/Contact" element={<Contact/>} />
      </Routes>
  
    
    </Router>
  );
}

