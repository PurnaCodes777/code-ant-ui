import { useContext, useRef } from "react"
import { IoClose } from "react-icons/io5"
import { RepoContext } from "../../AddRepoContext/AddRepoContext"


const AddRepoForm = () => {

    const { setShowRepo, formRepoData, setFormRepoData, fakeRepoData, setFakeRepoData } = useContext(RepoContext);

    const formRef = useRef()

    const handleChange = (event) => {

        // To target individual input item
        const { name, value } = event.target;

        // console.log(name, value);

        // Dynamically update the key-value pair
        setFormRepoData({ ...formRepoData, [name]: value });

    }


    const handleSubmit = (event) => {

        event.preventDefault(); // Prevent page reload
        formRef.current.reset();
        console.log(formRepoData);
        setFakeRepoData((prev) => [...prev, formRepoData])




    };



    return (
        <div className="w-[500px] h-[450px] p-6 px-7 bg-slate-100 z-[100] 
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md border rounded-md custom-range:w-[383px] custom-range:absolute custom-range:mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">✨ Add a Repository</h1>
                <IoClose onClick={() => setShowRepo((prev) => !prev)} className="text-xl hover:text-red-500 cursor-pointer" />
            </div>
            <div className="mt-5">
                <form ref={formRef} action="/" onSubmit={handleSubmit} autoComplete="off">
                    <div className="flex flex-col gap-3">
                        <div className="mb-2">
                            <p className="text-md mb-2">Name of the Repository</p>
                            <input onChange={handleChange} name="name" className="w-full p-2 rounded-md text-sm border-0 outline-none focus:outline-[#1570EF]" type="text" placeholder="Repository name" required />
                        </div>

                        <div className="flex">
                            <div className="mb-2 basis-1/2">
                                <p className="text-md mb-2">Set Visibility</p>
                                <div className="flex flex-col gap-2  p-1">
                                    <div className="flex items-center gap-1">
                                        <label className="text-sm" htmlFor="public">Public</label>
                                        <input onChange={handleChange} id="public" name="visibility" type="radio" value='Public' required />
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <label className="text-sm" htmlFor="private">Private</label>
                                        <input onChange={handleChange} id="private" name="visibility" type="radio" value='Private' required />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 mb-2 basis-1/2">
                                <p className="text-md ">Select Technology</p>
                                <select onChange={handleChange} className="w-full p-2 border-0 outline-none focus:outline-[#1570EF] rounded-md text-sm" name="language" required>
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
                                <input onChange={handleChange} name="size" className="p-2 rounded-md text-sm border-0 outline-none focus:outline-[#1570EF] custom-range:w-[150px]" type="text"
                                    placeholder="Format: 1024 KB" required pattern="\d+\s?(KB|MB|GB)" />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <p>Updated</p>
                                <input onChange={handleChange} name="updated" className="p-2 rounded-md text-sm border-0 outline-none focus:outline-[#1570EF] custom-range:w-[160px]" type="text"
                                    placeholder="2 days" required />
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