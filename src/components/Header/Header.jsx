import { FaPlus } from "react-icons/fa6"
import { FiRefreshCcw } from "react-icons/fi"
import { useContext } from "react"
import { RepoContext } from "../../AddRepoContext/AddRepoContext"


const Header = () => {

    const { showRepo, setShowRepo } = useContext(RepoContext)

    return (
        <>
            <div className="flex items-center justify-between mb-3 py-4 px-5 custom-range:flex-col custom-range:items-start gap-2">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-semibold">Repositories</h1>
                    <p className="text-[12px] text-[#414651]">33 total repositories</p>
                </div>

                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 border py-2 px-4 rounded-lg shadow-sm">
                        <FiRefreshCcw />
                        <span className="text-[13px] text-[#414651]">Refresh All</span>
                    </button>
                    <button onClick={() => setShowRepo(!showRepo)} className="text-[13px] flex items-center gap-2 bg-[#1570EF] text-white hover:bg-[#2f81f3] border py-2 px-4 rounded-lg shadow-sm">
                        <FaPlus />
                        Add Repository
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header