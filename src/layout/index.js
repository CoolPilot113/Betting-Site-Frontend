import Header from '../components/header';
import Navbar from '../components/Navbar';
// const socket = socketIO.connect('http://localhost:3003');
const Layout = ({ children }) => {
  return (
    <div className="w-screen">
      <Header />
      <div className="flex">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
