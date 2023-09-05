// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BGM from './pages/BGM';
import Home from './pages/Home'
import Settings from './pages/Settings';

function App(props) {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
        {/* <Route path='/gamespace' element={<GameSpace/>}/> */}
        <Route path='/gamesetup/*' element={<Settings/>}/>
        <Route path='/bgm' element={<BGM/>}/>

      </Routes>
      
    </main>
  );
}

export default App;
