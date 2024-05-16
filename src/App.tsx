import Home from "./pages/home.tsx";
import Category from "./pages/category.tsx";
import Product from "./pages/product.tsx";
import Subscription from "./pages/subscription.tsx";
import AboutUs from "./pages/aboutUs.tsx";
import Checkout from "./pages/checkout.tsx";
import ProductPrice from "./components/globalComponents/productPrice.tsx";
import Cart from "./components/globalComponents/cart.tsx";
import Navbar from "./components/globalComponents/navbar.tsx";
import Test from "./components/globalComponents/test.tsx";
import {Routes,Route} from "react-router-dom";


import {PaymentStepProvider} from "./contexts/paymentStep.tsx";



function App() {

  return (
	  <Routes>
		  <Route path='/' Component={Home}/>
		  <Route path='/category' Component={Category}/>
		  <Route path='/product' Component={Product}/>
		  <Route path='/subscription' Component={Subscription}/>
		  <Route path='/aboutUs'  Component={AboutUs}/>
		  <Route path='/checkout' Component={Checkout}/>
	  </Routes>
  )
}

export default App
