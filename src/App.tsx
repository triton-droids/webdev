import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Join from './pages/Join';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Sponsorship from './pages/Sponsorship';
import Advisor from './pages/Advisor';
import Alumni from './pages/Alumni';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/advisor" element={<Advisor />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </Layout>
  );
}

export default App;
