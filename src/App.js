import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Messages from "./pages/Messages"
import FileManager from "./pages/Filemanager"
import Analytics from "./pages/Analytics"
import Order from "./pages/Order"
// import Saved from "./pages/Saved"
import Favourite from './pages/Favourite'
import Setting from "./pages/Setting"
import Sidebar from './components/Sidebar';



function App() {
  return (
    <>
    <Router>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/users' element={<Users />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/file-manager' element={<FileManager />} />
            <Route path='/order' element={<Order />} />
            <Route path='/saved' element={<Favourite />} />
            <Route path='/settings' element={<Setting />} />
            <Route path='*' element={<>Not Found</>} />
          </Routes>
        </Sidebar>
    </Router>
    </>
  );
}

export default App;
