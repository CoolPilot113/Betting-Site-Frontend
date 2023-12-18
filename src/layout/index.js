import Header from '../components/header';
import Navbar from '../components/Navbar';
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
