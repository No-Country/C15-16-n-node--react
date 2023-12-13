import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SignInSide from './pages/SignInSide'
import SignUp from './pages/SignUp'
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/registro' element={<SignInSide/>}/>
      <Route path="/inicioSesion" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
};

export default App
