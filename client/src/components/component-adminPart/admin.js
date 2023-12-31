import Sidebar from './components/Sidebar'
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Analytics from "./pages/Analytics";
import './admin.css'
import ReportList from './pages/Reports';
function Admin() {
  return (
    <>
   
      <Topbar />
      <div className="container-admin">
        <Sidebar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/reports" element={<ReportList />} />
        </Routes>
        </div>
      </>
 
  
  );
}
export default Admin;