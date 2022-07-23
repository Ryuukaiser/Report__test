import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { useAppDispatch, useAppSelector } from 'app/store/hooks'
import Home from './pages/Home/Home';
import Report from './pages/Report/Report';
import LoadingScreen from './pages/Loading/Loading'



function App() {
  const LoadingTime = useAppSelector(state=> state.Loading) 
  const [loading, setLoading] = useState(LoadingTime.Loading) 
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
 
  return (
    <>
    { loading === false ? (
    <div className="App">
     <Router>
       <Routes>
         <Route element={<Home/>} path="/" ></Route>
         <Route element={<Report/>} path="/report" ></Route>
       </Routes>
     </Router>
    </div>
    ) : (
      <LoadingScreen />
    )}
    </>
  );
}

export default App;
