
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Update from './views/Update';
import Dashboard from './views/Dashboard';
import ViewOne from './views/ViewOne';

function App() {
  return (
    <div className="App">
      <h1>Product Manager App</h1>
      <Link to={"/"}>Dashboard</Link>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/product/:id" element={<ViewOne />} ></Route>
        <Route path='/product/:id/edit' element={<Update />}></Route>
      </Routes>

    </div>
  );
}

export default App;