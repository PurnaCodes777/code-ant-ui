import { useState } from "react"
import { Link } from "react-router"

const SidebarMenu = ({ icon, text, menu, setMenu }) => {



    return (
        <>
            <Link to={text === 'Logout' ? '/login' : text === "Repositories" ? "/home" : "*"} className={`flex items-center
             gap-2 p-2 pr-4 rounded-md cursor-pointer
              text-black hover:bg-[#1570EF]
               hover:text-white ${text === menu ? "bg-[#1570EF] text-white" : "bg-transparent text-black"}`}
                onClick={() => setMenu(text)}
            >
                <div>{icon}</div>
                <p className="text-[13.5px] pr-0 custom-range:w-full">{text}</p>
            </Link>
        </>
    )
}

export default SidebarMenu