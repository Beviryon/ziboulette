import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Realizations from './components/Realizations';
import Models from './components/Models';
import Appointment from './components/Appointment';
import Testimonials from './components/Testimonials';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/realizations" element={<Realizations />} />
                <Route path="/models" element={<Models />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
        </Router>
    );
};

export default App;
