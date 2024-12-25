import SignInButton from "../SignInButton/SignInButton"


const SelfHosted = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-4 w-full py-5">
                <SignInButton icon='/gitlab.png' text='Self Hosted GitLab' />
                <SignInButton icon='/key.png' text='Sign in with SSO' />
            </div>
        </>
    )
}

export default SelfHosted