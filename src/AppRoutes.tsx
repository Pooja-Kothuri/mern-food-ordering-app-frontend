import {Routes, Route , Navigate} from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
//Routes contains group of routes
const AppRoutes=()=>{
    return(
        <Routes>
           <Route path="/" element={<Layout showBgImg><HomePage/></Layout>}></Route>
           <Route element={<ProtectedRoute/>}>
           <Route path="/userprofile" element={<Layout><UserProfilePage/></Layout>}></Route>
  
           </Route>
           <Route path="/manage-restaurant" element={<Layout><ManageRestaurantPage/></Layout>}></Route>

           <Route path="/auth-callback" element={<AuthCallbackPage/>}></Route>
           <Route path="/about" element={<span>about PAGE</span>}></Route>
           <Route path="*" element={<Navigate to="/"/>}></Route>
        </Routes>
    )
};

export default AppRoutes;