import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./core/Sidebar";
import Navbar from "./core/Navbar";
import Dashboard from "./core/Dashboard"
import Home from "./pages/Home"
import Orders from "./pages/Orders"
import Products from "./pages/Products"
import Delivery from "./pages/Delivery"
import Marketing from "./pages/Marketing"
import Analytics from "./pages/Analytics"
import Payments from "./pages/Payments"
import Tools from "./pages/Tools"
import Discounts from "./pages/Discounts"
import Audience from "./pages/Audience"
import Appearance from "./pages/Appearance"
import Plugins from "./pages/Plugins"



function App() {
  return (
    <div className="h-full w-full">
      
      <div>
        <Routes>
          <Route path="/" Component={Dashboard}>
            
            <Route path="/dashboard/home" exact Component={Home} />
            <Route path="/dashboard/orders" Component={Orders} />
            <Route path="/dashboard/products" Component={Products} />
            <Route path="/dashboard/delivery" Component={Delivery} />
            <Route path="/dashboard/marketing" Component={Marketing} />
            <Route path="/dashboard/analytics" Component={Analytics} />
            <Route path="/dashboard/payments" Component={Payments} />
            <Route path="/dashboard/tools" Component={Tools} />
            <Route path="/dashboard/discounts" Component={Discounts} />
            <Route path="/dashboard/audience" Component={Audience} />
            <Route path="/dashboard/appearance" Component={Appearance} />
            <Route path="/dashboard/plugins" Component={Plugins} />
          </Route>
          <Route path="*" element={<h1 className="flex justify-center items-center place-content-center top-4 text-[6rem] ">Page Not Found ... <span className="text-[2rem]">Please go to /dashboard/payments</span></h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
