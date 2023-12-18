import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import './App.css';
import Layout from './layout';
import Home from './components/Home/Home';
import { Loading } from './pages/Loading';

import socket from './socket';
import configSocket from './socket/config';

configSocket(socket);

function App() {
  localStorage.setItem('isLogin', 0);
  //   const [visible, setVisible] = useState(false);
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setVisible(true);
  //     }, 3000);
  //     return () => clearTimeout(timer);
  // }, []);

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
      {/* } */}
    </Provider>
  );
}

export default App;
