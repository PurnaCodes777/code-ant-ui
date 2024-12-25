
import { BiUpArrowAlt } from "react-icons/bi"
import Stats from "../Stats/Stats"
import Saas from "../Saas/Saas"
import { useContext } from "react"
import { LoginContext } from "../../LoginTabContext/LoginTabContext"
import SelfHosted from "../SelfHosted/SelfHosted"






const Login = () => {

    const { loginTab, setLoginTab } = useContext(LoginContext);

    return (
        <div className="login w-screen min-h-screen flex">
            <div className="left border basis-1/2 flex items-center justify-center relative custom-range:hidden">
                <div className="absolute left-0 bottom-0"><img className="w-60" src="/code-ant-login.png" /></div>
                <div className="absolute top-1/4 left-1/4 mini-desktop:left-8 tablet:left-4">
                    <div className="border rounded-3xl w-[450px] shadow-md relative tablet:w-[320px]">
                        <div className="flex items-center justify-start gap-3 px-5 py-4 border-b">
                            <img className="w-7 h-7" src="/code-ant.png" />
                            <p className="text-base font-bold tablet:text-sm">AI to Detect & Autofix Bad Code</p>
                        </div>
                        <div className="flex items-center justify-center text-center gap-8 text-sm py-6">
                            <Stats count='30+' category='Language Support' />
                            <Stats count='10K+' category='Developers' />
                            <Stats count='100K+' category='Hours Saved' />
                        </div>

                        <div className="w-56 bg-white absolute -right-6 py-4 px-5 border rounded-3xl -bottom-36">
                            <div className="flex items-center justify-between mb-3">
                                <img className="w-14 h-14" src="/pie_icon.png" />
                                <div>
                                    <div className="flex items-center text-sm font-semibold text-[#0049C6]">
                                        <BiUpArrowAlt style={{ fontSize: '20px' }} />
                                        <p>14%</p>
                                    </div>
                                    <p className="text-[10px]">This week</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[12px] font-semibold">Issues Fixed</p>
                                <p className="text-2xl font-bold">500k+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right basis-1/2 flex flex-col items-center justify-center p-5 custom-range:w-screen custom-range:basis-full custom-range:px-5">
                <div className="border bg-white w-full py-6  pb-2 rounded-lg shadow-sm">
                    <div className="flex flex-col pb-7">
                        <div className="flex flex-col items-center justify-center gap-5 mb-4">
                            <img className="w-36" src="/code-ant-logo.png" />
                            <p className="text-xl font-bold">Welcome to CodeAnt AI</p>
                        </div>
                        <div className="felx px-5 font-medium">
                            <button onClick={() => setLoginTab('sass')} className={`border w-1/2 h-11 rounded-lg rounded-e-none border-r-0  shadow-sm ${loginTab === 'sass' ? "bg-[#1570EF] text-white " : "bg-[#FAFAFA] text-black"} `}>SAAS</button>
                            <button onClick={() => setLoginTab('self-hosted')} className={`border w-1/2 h-11 rounded-lg rounded-s-none border-l-0 shadow-sm ${loginTab === 'self-hosted' ? "bg-[#1570EF] text-white " : "bg-[#FAFAFA] text-black"}`}>Self Hosted</button>
                        </div>
                    </div>
                    <hr />
                    {loginTab === 'sass' ? <Saas /> : <SelfHosted />}

                </div>
                <p className="mt-7 text-sm">By signing up you agree to the <span className="font-bold">Privacy Policy.</span></p>
            </div>
        </div>
    )
}

export default Login