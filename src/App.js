import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './Pages/MainPage';
import { TripPage } from './Pages/TripPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path='/trippage' element={<TripPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
