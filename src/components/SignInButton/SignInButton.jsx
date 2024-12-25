import { FaGithub } from "react-icons/fa6"
import { Link } from "react-router"


const SignInButton = ({ icon, text }) => {
    return (
        <div className="w-full  flex items-center justify-center">
            <Link to={'/home'} className="flex items-center justify-center gap-3 w-[45%] px-2 py-3 border rounded-md custom-range:w-[85%] tablet:w-[95%] hover:bg-slate-50">
                <img className="w-5" src={icon} />
                <span className="text-sm font-semibold">{text}</span>
            </Link>
        </div>
    )
}

export default SignInButton