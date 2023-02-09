import { Route, Routes, Navigate } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Payment from '../pages/Payment';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';
import Signup from '../pages/Signup';
import CheckOut1 from '../pages/Checkout1';
import Delete from '../profile/Delete';
import ChangePassword from '../profile/ChangePassword';
import EditProfile from '../profile/EditProfile';
import Profile from '../profile/Profile';
import Order from '../pages/Order';


function Router() {
    return (<Routes>
        <Route path="/" element={<Navigate to='home' />}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/checkout1" element={<CheckOut1></CheckOut1>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        {/* <Route path="/home/:userName" element={<Home></Home>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/shop/:id" element={<ProductDetails></ProductDetails>}></Route>
        {/* <Route path="" element={<Shop></Shop>}></Route> */}
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="/home/profile" element={<Profile/>}></Route>
        <Route path="/home/profile/edit/data" element={<EditProfile/>}></Route>
        <Route path="/home/profile/edit/changepassword" element={<ChangePassword/>}></Route>
        <Route path="/home/profile/edit/options/delete" element={<Delete/>}></Route>
        <Route path="/order" element={<Order/>}></Route>


    </Routes>

    )
}

export default Router