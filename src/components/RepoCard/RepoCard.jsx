import { GrStorage } from "react-icons/gr"


const RepoCard = ({ name, visibility, language, size, updated }) => {
    return (
        <div>
            <div className="p-5 border-[0.1px] border-[#f5f5f5] cursor-pointer hover:bg-[#f5f5f5] transition-all">
                <div className="flex items-center gap-2 mb-3">
                    <p className="text-md font-medium">{name}</p>
                    <p className={`text-[12px] text-[#175CD3] py-1 px-3  
                    ${visibility === "Public" ? "bg-[#B2DDFF]" : "bg-red-400 text-white border-red-500"} rounded-3xl border border-[#b3dbf9]`}>{visibility}</p>
                </div>
                <div className="flex items-center gap-14 text-[13px]">
                    <p className="dot relative">{language}</p>
                    <p className="flex items-center gap-2"><GrStorage />{size}</p>
                    <p>{updated}</p>
                </div>
            </div>
        </div>
    )
}

export default RepoCard