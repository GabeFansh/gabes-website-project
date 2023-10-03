import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';

import Home from '@/routes/Home';
import About from '@/routes/About';
import NotMatch from '@/routes/NotMatch';
import Projects from '@/routes/Projects';


const GabeApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="*" element={<NotMatch />} />
            </Route>
        </Routes>

    );
};
export default GabeApp;