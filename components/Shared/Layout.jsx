import Center from "./Center";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
     
        <Header />
        <Navbar />
        <Center>{children}</Center>
        <Footer />
      
    </div>
  );
};

export default Layout;
