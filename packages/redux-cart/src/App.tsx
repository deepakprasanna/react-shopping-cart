import Layout from './components/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import { Routes, Route } from 'react-router';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Details />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
