import "./App.css";
import './css/sb-admin-2.css';
import Dashboard from './Dashboard';
import Users from './Users';
import CreateUser from './CreateUser';
import Userview from './Userview';
import Login from './Login';
import UserEdit from './UserEdit';
import Portal from './Portal';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './Products';
import CreateProduct from "./CreateProduct"
import ViewProduct from "./ViewProduct";
import ProductEdit from "./ProductEdit";

function App() {


  return (
<BrowserRouter>
    
          <Routes>
          <Route path="/" element={<Login />}/>

          <Route path="portal" element={<Portal />}>   
          <Route path="dashboard" element={<Dashboard />}/>

          <Route path="users" element={<Users />}/>
          <Route path="createuser" element={<CreateUser />}/>
          <Route path="users/:id" element={<Userview />}/>
          <Route path="user/edit/:id" element={<UserEdit />}/>
         
          <Route path="products" element={<Products />}/>
          <Route path="createproduct" element={<CreateProduct />}/>
          <Route path="products/:id" element={<ViewProduct/>}/>
          <Route path="product/edit/:id" element={<ProductEdit />}/>
          
          

          </Route>
            </Routes>
            
          
      </BrowserRouter>
  )
}

export default App;
