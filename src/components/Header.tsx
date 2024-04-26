import {Link} from "react-router-dom";
import MobileNav from "./mobileNav";
import MainNav from "./mainNav";
const Header=()=>{
    return (
        <div className="border-b-2 border-b-orange-500 py-6">
           <div className="container mx-auto flex justify-between items-center">
            <Link to='/' className="text-3xl font-semibold text-orange-500 tracking-tight ">EasyBuy & Eat</Link>
            <div  className="md:hidden">
                <MobileNav></MobileNav>
            </div>
            <div className="hidden md:block">
                <MainNav/>
            </div>
           </div>
        </div>
    )
}
export default Header;  