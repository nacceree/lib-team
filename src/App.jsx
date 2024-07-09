import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import MainLaout from './layouts/MainLayout';
import AllBooks from './pages/AllBooks';
import NotFound from './pages/NotFound'
import CategoryBooks from './pages/CategoryBooks'
import OneBook from './components/OneBook';
import Login from './components/Login'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLaout />}>
    <Route index element={<HomePage />} />
    <Route path='/allbooks' element={<AllBooks />} />
    <Route path='/allbooks/:category/:bookId' element={<OneBook />} />
    <Route path='*' element={<NotFound />} />
    <Route path="/allbooks/:categoryName" element={<CategoryBooks />} />
    <Route path='/login' element={<Login />} />
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>;
};
export default App;