import React from 'react';
import NavBar from './components/Navbar/NavBar';
import { Admin } from './pages';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider theme={{ token: { fontFamily: 'Poppins' } }}>
      <div className="bg-gray h-min-[100vh]">
        <NavBar />
        <Admin />
      </div>
    </ConfigProvider>
  );
}

export default App;
