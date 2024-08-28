import './Components/Accounts/Account.css'
import Login from './Components/Accounts/Account.jsx';
import Register from './Components/Accounts/Register.jsx';
import Dashboard from './Components/Dashboard.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

