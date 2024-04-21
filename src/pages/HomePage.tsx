//pages contains all pages of home page

import SearchBar, { SearchForm } from "@/components/SearchBar"
import { useNavigate } from "react-router-dom"
const HomePage = () => {
  const navigate=useNavigate();
  const handleSearchSubmit=(searchFormValues:SearchForm)=>{
    navigate({
      pathname:`/search/${searchFormValues.searchQuery}`,
    })
  }
  return (
    <div className="flex flex-col gap-12">
       <div className="md:px-32 flex flex-col gap-5 py-8 rounded-lg shadow-md bg-white -mt-16 text-center">
        <h1 className=" text-4xl text-orange-600 font-bold tracking-tight">
            Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away</span>
        <SearchBar placeHolder="Search by City or Town" onSubmit={handleSearchSubmit} />
       </div>
   </div> 
  )
}

export default HomePage