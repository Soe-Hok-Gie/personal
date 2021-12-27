// import Login from './pages/Login'
// import Register from './pages/Register';
import Login from './pages/Login';
import Register from './pages/Register';

import {
    BrowserRouter,
    Routes,
    Route,
    // Navigate,
  } from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/login' element ={<Login/>}/>
            <Route path='/register' element ={<Register/>}/>
            {/* <Route path='/user' element ={<User/>}/> */}
            {/* <Route path='/loginsukses' element= {User ? <Navigate to='/' /> : <User/>}/> */}
            </Routes>
    
        </BrowserRouter>
    )
}

export default App


