import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Shopping from './components/Shopping';
import Description from './components/Description';
import Cartdis from './components/Cartdis';
import Faq from './components/Faq';
import Foot from './components/Foot';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className='page-content'>
        <Routes>
        <Route path='/' element={<Shopping />}></Route>
        <Route path='/details/:id' element={<Description />}></Route>
        <Route path='cart' element={<Cartdis/>}></Route>
        <Route path='fq' element={<Faq/>}></Route>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      </div>
      <Foot/>
    </div>
  );
}

export default App;
