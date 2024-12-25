import SignInButton from "../SignInButton/SignInButton"

const Saas = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-4 w-full py-5">
                <SignInButton icon='/github.png' text='Sign in with Github' />
                <SignInButton icon='/bit-bucket.png' text='Sign in with Bitbucket' />
                <SignInButton icon='/azure-devops.png' text='Sign in with Azure Devops' />
                <SignInButton icon='/gitlab.png' text='Sign in with GitLab' />
            </div>
        </>
    )
}

export default Saas