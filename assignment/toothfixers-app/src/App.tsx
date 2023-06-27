import React from 'react';
import './App.css';
import CreateRecords from './components/create';
import HomePg from './components/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App: React.FC = () => {
 return (
 <div className="Container">
<BrowserRouter>
<Routes>
    <Route path='/' element={<HomePg/>} />
    <Route path='/patient-record' element={<CreateRecords/>}/>
</Routes>
</BrowserRouter>
</div>   
    );     
 
};

export default App;



