import { useContext } from "react"
import { IoClose } from "react-icons/io5"
import { RepoContext } from "../../AddRepoContext/AddRepoContext"


const AddRepoForm = () => {

    const { setShowRepo } = useContext(RepoContext);

    return (
        <div className="w-[500px] h-[450px] p-6 px-7 bg-slate-100 z-[100] 
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md border rounded-md custom-range:w-[383px] custom-range:absolute custom-range:mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">✨ Add a Repository</h1>
                <IoClose onClick={() => setShowRepo((prev) => !prev)} className="text-xl hover:text-red-500 cursor-pointer" />
            </div>
            <div className="mt-5">
                <form action="/">
                    <div className="flex flex-col gap-3">
                        <div className="mb-2">
                            <p className="text-md mb-2">Name of the Repository</p>
                            <input className="w-full p-2 rounded-md text-sm border-0 outline-none focus:outline-[#1570EF]" type="text" placeholder="Repository name" />
                        </div>

                        <div className="flex">
                            <div className="mb-2 basis-1/2">
                                <p className="text-md mb-2">Set Visibility</p>
                                <div className="flex flex-col gap-2  p-1">
                                    <div className="flex items-center gap-1">
                                        <label className="text-sm" htmlFor="public">Public</label>
                                        <input id="public" name="visibility" type="radio" value='Public' />
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <label className="text-sm" htmlFor="private">Private</label>
                                        <input id="private" name="visibility" type="radio" value='Private' />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 mb-2 basis-1/2">
                                <p className="text-md ">Select Technology</p>
                                <select className="w-full p-2 border-0 outline-none focus:outline-[#1570EF] rounded-md text-sm" name="language">
                                    <option value="JavaScript">JavaScript</option>
                                    <option value="React">React</option>
                                    <option value="Python">Python</option>
                                    <option value="Java">Java</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex basis-1/2 gap-3 mb-6">
                            <div className="flex flex-col gap-2 ">
                                <p>File Size</p>
                                <input className="p-2 rounded-md text-sm border-0 outline-none focus:outline-[#1570EF] custom-range:w-[150px]" type="text" placeholder="Format: 1024 KB" />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <p>Updated</p>
                                <input className="p-2 rounded-md text-sm border-0 outline-none focus:outline-[#1570EF] custom-range:w-[160px]" type="text" placeholder="2 days" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button className="border py-2 px-10 rounded-md shadow-sm bg-white" type="reset">Reset</button>
                        <button className="border py-2 px-10 rounded-md shadow-sm bg-[#1570EF] text-white hover:bg-[#2a7ef3]" type="submit">Add</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default AddRepoForm