import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Hotel, HotelList } from './pages';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home /> }/>
            <Route path='/hotels' element={<HotelList /> }/>
            {/* the next route is used to pass the hotel id */}
            <Route path="/hotels/:id" element= {<Hotel />} />
            
            
          </Routes>

          
        
      
      </BrowserRouter>
  
    </div>
  );
}


export default App;
