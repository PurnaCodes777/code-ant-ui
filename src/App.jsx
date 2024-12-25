
import Sidebar from "./components/Sidebar/Sidebar"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import { IoSearch } from "react-icons/io5"
import AddRepoForm from "./components/AddRepoForm/AddRepoForm"
import { useContext } from "react"
import { RepoContext } from "./AddRepoContext/AddRepoContext"




const App = () => {


  const { showRepo, setShowRepo } = useContext(RepoContext);


  return (
    <div className="app flex min-h-screen custom-range:flex-col">
      <div className="left w-[250px] custom-range:w-full min-h-full px-0 py-4 border shadow-sm bg-white transition-all relative">
        <Sidebar />
      </div>
      <div className="right m-5 border rounded-lg shadow-sm w-full bg-white custom-range:ml-0 ">
        <Header />
        <div className="flex items-center w-[30%] custom-range:w-[88%]  bg-white text-[#414651] px-3 border rounded-lg mx-5 mb-5">
          <IoSearch />
          <input className="p-2 w-full h-full border-none outline-none text-[13px] bg-transparent" type="search" placeholder="Search Repositories" />
        </div>
        <Main />
      </div>

      {showRepo && <AddRepoForm />}
    </div>
  )
}

export default App