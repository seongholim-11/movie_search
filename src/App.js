import './App.css';
import Beginning from './pages/Beginning';
import Main from './pages/Main';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Beginning/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
