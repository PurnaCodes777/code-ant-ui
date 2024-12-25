import { RxHamburgerMenu } from "react-icons/rx"
import { HiOutlineHome } from "react-icons/hi"

import SidebarMenu from "../SidebarMenu/SidebarMenu"
import { FaCode } from "react-icons/fa6"
import { IoIosCloudOutline } from "react-icons/io"
import { LuBookText } from "react-icons/lu"
import { IoCloseSharp, IoLogOutOutline, IoSettingsOutline } from "react-icons/io5"
import { FiPhone } from "react-icons/fi"
import { useState } from "react"


const Sidebar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [menu, setMenu] = useState('Repositories')


    return (
        <>
            <div className="flex mb-4 custom-range:items-center justify-between p-2">
                <img className="w-34 h-7" src="/code-ant-logo.png" alt="logo" />
                <div className="md:hidden" onClick={() => { setShowMenu(!showMenu) }}> {showMenu ? <IoCloseSharp /> : <RxHamburgerMenu />}</div>
            </div>

            <div className="custom-range:w-full px-3 pb-4 absolute bg-white ">

                <div className={` ${showMenu ? "" : "hidden "}`}>
                    <select className="py-2 pr-1 border rounded-lg text-[12px] custom-range:w-full " name="name">
                        <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
                        <option value="PurnaChandra">PurnaChandra</option>
                    </select>
                </div>
                <div className={`flex flex-col z-10 relative h-full mt-4  ${showMenu ? "" : "custom-range:hidden"}`}>
                    <SidebarMenu icon={<HiOutlineHome size={18} />} text='Repositories' menu={menu} setMenu={setMenu} />
                    <SidebarMenu icon={<FaCode size={18} />} text='AI Code Review' menu={menu} setMenu={setMenu} />
                    <SidebarMenu icon={<IoIosCloudOutline size={18} />} text='Cloud Security' menu={menu} setMenu={setMenu} />
                    <SidebarMenu icon={<LuBookText size={18} />} text='How to Use' menu={menu} setMenu={setMenu} />
                    <SidebarMenu icon={<IoSettingsOutline size={18} />} text='Settings' menu={menu} setMenu={setMenu} />
                    <div className="absolute -bottom-[200%] w-full custom-range:static">
                        <SidebarMenu icon={<FiPhone size={18} />} text='Support' menu={menu} setMenu={setMenu} />
                        <SidebarMenu icon={<IoLogOutOutline size={18} />} text='Logout' menu={menu} setMenu={setMenu} />
                    </div>
                </div>


            </div>

        </>
    )
}

export default Sidebar