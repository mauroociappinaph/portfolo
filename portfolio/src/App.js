import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Form from './Components/Form/Form';


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
