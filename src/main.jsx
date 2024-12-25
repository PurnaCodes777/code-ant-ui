
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/Login/Login.jsx'
import LoginTabContext from './LoginTabContext/LoginTabContext.jsx'






createRoot(document.getElementById('root')).render(


  <LoginTabContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<App />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </LoginTabContext>


)
