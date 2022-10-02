import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './Pages/MainPage';
import { TripPage } from './Pages/TripPage';
import { TripPage2 } from './Pages/TripPage2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path='/trippage' element={<TripPage/>}/>
        <Route path='/trippage2' element={<TripPage2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
