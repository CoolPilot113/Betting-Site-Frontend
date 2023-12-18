import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import store from './components/redux/store';
import './App.css';
import Layout from './layout';
import Home from './components/Home/Home';
import { Loading } from './pages/Loading';

import socket from './socket';
import configSocket from './socket/config';

import 'react-toastify/dist/ReactToastify.css';

configSocket(socket);

function App() {
  return (
    <Provider store={store}>
      {/* <Loading visible={visible}/> */}
      {/* {visible &&  */}
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Layout>
      <ToastContainer />
      {/* Same as */}
      <ToastContainer />
      {/* } */}
    </Provider>
  );
}

export default App;
