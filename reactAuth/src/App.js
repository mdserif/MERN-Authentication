import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import LoginReg from './pages/Auth/LoginReg';
import SendPasswordResetEmail from './pages/Auth/SendPasswordResetEmail';
import ResetPassword from './pages/Auth/ResetPassword';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="login" element={<LoginReg />}/>
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />}/>
            <Route path='api/user/reset/:id/:token' element={<ResetPassword />}/>
          </Route>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='*' element={<h1> Error!! 404 Page Not Found. </h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

