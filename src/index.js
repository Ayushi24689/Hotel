import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import News from './components/Pages/News';
import Restaurent from './components/Pages/Restaurent';
import About from './components/Pages/About';
import Rooms1 from './components/Rooms1';
import Spa from './components/Pages/Spa';
import Contact from './components/Pages/Contact';
import Home1 from './components/Home1';
import UpdateForm from './components/UpdateForm';
import Login from './components/Login';
import { Provider } from 'react-redux';
import ReduxMap from './components/ReduxMap';
// import { store } from './components/Redux/Store';
// import Redux from './components/Redux/Redux';
import Form from './components/Form';
import Footer from './components/Footer';
import Get from './Get';
import Const from './components/Const';
import Practise from './components/Practise';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
           <>  
           {/* <Provider store={store}>   </Provider>   */}
       <BrowserRouter> 
              <Header />
                <Routes>
                  {/* <Route path='/reduxmap' element={<ReduxMap/>}></Route> */}
                  {/* <Route path='/' element={<Redux/>}></Route>  */}
                  {/* <Route path='/get' element={<Form/>}></Route> */}
                  {/* <Route path='/' element={<Home1/>}></Route> */}
                  {/* <Route path='/update/:id' element={<UpdateForm/>}></Route> */}
                  {/* <Route path='/Login' element={<Login/>}></Route> */}
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/News' element={<News />}></Route>
                    <Route path='/Rooms 1' element={<Rooms1/>}></Route>
                    <Route path='/RESTAURENT' element={<Restaurent/>}></Route>
                    <Route path='/ABOUT' element={<About/>}></Route>
                    <Route path='/SPA' element={<Spa/>}></Route>
                    <Route path='/Contact' element={<Contact/>}></Route>
                       {/* <Route path='/Get' element={<Get/>}></Route>  */}
                       {/* <Route path='/Const' element={<Const/>}></Route> */}
                      
                </Routes>
                <Footer/>
                {/* <Practise/> */}
            </BrowserRouter>
          </>
);